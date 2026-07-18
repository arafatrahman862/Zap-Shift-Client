import { useMemo, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import {
    Circle,
    MapContainer,
    Marker,
    Popup,
    TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "../../utils/leafletIcon";

import ChangeView from "./ChangeView";
import CurrentLocationButton from "./CurrentLocationButton";

import {
    defaultIcon,
    nearestIcon,
    userIcon,
} from "../../utils/mapIcons";

import {
    calculateDistance,
    findNearest,
} from "../../utils/findNearest";

const Coverage = () => {
    const serviceCenters = useLoaderData();
    const mapRef = useRef(null)

    // Bangladesh center
    const defaultCenter = [23.685, 90.3563];

    const [userLocation, setUserLocation] = useState(null);
    const [loading, setLoading] = useState(false);

    // Find nearest center whenever user location changes
    const nearestCenter = useMemo(() => {
        if (!userLocation) return null;
        return findNearest(userLocation, serviceCenters);
    }, [userLocation, serviceCenters]);

    // GPS
    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            return;
        }

        setLoading(true);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserLocation([
                    position.coords.latitude,
                    position.coords.longitude,
                ]);
                setLoading(false);
            },
            () => {
                alert("Unable to retrieve your location.");
                setLoading(false);
            },
            {
                enableHighAccuracy: true,
            }
        );
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
        if (district) {
            const coordinates = [district.latitude, district.longitude];
            mapRef.current.flyTo(coordinates, 14)
        }
    }

    return (
        <>

            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4">

                    {/* Heading */}

                    <div className="mb-10 text-center">

                        <span className="rounded-full bg-primary/10 px-4 py-2 font-semibold text-primary">
                            Nationwide Coverage
                        </span>

                        <h2 className="mt-4 text-4xl font-bold">
                            We are available in
                            <span className="text-primary"> 64 Districts</span>
                        </h2>

                        <p className="mx-auto mt-4 max-w-3xl text-slate-500">
                            Enable your location to instantly find the nearest
                            service center anywhere in Bangladesh.
                        </p>

                    </div>
                    <div>
                        <form onSubmit={handleSearch}>
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" name="location" className="grow" placeholder="Search" />


                        </form>
                    </div>

                    {/* Map */}

                    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">

                        <CurrentLocationButton
                            loading={loading}
                            onLocate={getCurrentLocation}
                        />

                        <MapContainer
                            center={defaultCenter}
                            zoom={8}
                            scrollWheelZoom={true}
                            className="h-[650px] w-full rounded-3xl"
                            ref={mapRef}
                        >

                            <ChangeView
                                center={userLocation || defaultCenter}
                                zoom={userLocation ? 12 : 8}
                            />

                            <TileLayer
                                attribution="&copy; OpenStreetMap contributors"
                                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                            />

                            {/* User Location */}

                            {userLocation && (
                                <>
                                    <Circle
                                        center={userLocation}
                                        radius={350}
                                        pathOptions={{
                                            color: "#2563eb",
                                            fillColor: "#3b82f6",
                                            fillOpacity: 0.25,
                                        }}
                                    />

                                    <Marker
                                        position={userLocation}
                                        icon={userIcon}
                                    >
                                        <Popup>
                                            <div className="text-center">
                                                <h3 className="font-bold text-primary">
                                                    📍 You are here
                                                </h3>
                                            </div>
                                        </Popup>
                                    </Marker>
                                </>
                            )}

                            {/* Service Centers */}

                            {serviceCenters.map((center) => {
                                const distance = userLocation
                                    ? calculateDistance(
                                        userLocation[0],
                                        userLocation[1],
                                        Number(center.latitude),
                                        Number(center.longitude)
                                    ).toFixed(2)
                                    : null;

                                const isNearest =
                                    nearestCenter?.district === center.district;

                                return (
                                    <Marker
                                        key={center.district}
                                        position={[
                                            Number(center.latitude),
                                            Number(center.longitude),
                                        ]}
                                        icon={
                                            isNearest
                                                ? nearestIcon
                                                : defaultIcon
                                        }
                                    >
                                        <Popup>

                                            <div className="w-60">

                                                {isNearest && (
                                                    <div className="badge badge-success mb-3">
                                                        Nearest Center
                                                    </div>
                                                )}

                                                <h3 className="text-lg font-bold text-primary">
                                                    {center.district}
                                                </h3>

                                                <p className="mt-2 text-sm text-slate-600">
                                                    {center.covered_area.join(", ")}
                                                </p>

                                                {distance && (
                                                    <p className="mt-3">
                                                        <span className="font-semibold">
                                                            Distance:
                                                        </span>{" "}
                                                        {distance} km
                                                    </p>
                                                )}

                                                <a
                                                    href={`https://www.google.com/maps/dir/?api=1&destination=${center.latitude},${center.longitude}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-green btn-sm mt-4 w-full"
                                                >
                                                    Navigate
                                                </a>

                                            </div>

                                        </Popup>
                                    </Marker>
                                );
                            })}
                        </MapContainer>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Coverage;
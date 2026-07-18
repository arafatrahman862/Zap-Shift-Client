import { useMemo, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import {
    Circle,
    MapContainer,
    Marker,
    Popup,
    TileLayer,
} from "react-leaflet";

import {
    FiMapPin,
    FiNavigation,
    FiSearch,
    FiMap,
    FiTruck,
} from "react-icons/fi";

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

    const mapRef = useRef(null);

    const defaultCenter = [23.685, 90.3563];

    const [userLocation, setUserLocation] = useState(null);
    const [loading, setLoading] = useState(false);

    const nearestCenter = useMemo(() => {
        if (!userLocation) return null;
        return findNearest(userLocation, serviceCenters);
    }, [userLocation, serviceCenters]);

    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported.");
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
                setLoading(false);
                alert("Unable to retrieve location.");
            },
            {
                enableHighAccuracy: true,
            }
        );
    };

    const handleSearch = (e) => {
        e.preventDefault();

        const value = e.target.location.value.trim();

        if (!value) return;

        const district = serviceCenters.find((item) =>
            item.district
                .toLowerCase()
                .includes(value.toLowerCase())
        );

        if (!district) {
            alert("District not found.");
            return;
        }

        mapRef.current?.flyTo(
            [
                Number(district.latitude),
                Number(district.longitude),
            ],
            12,
            {
                animate: true,
                duration: 2,
            }
        );
    };

    return (
        <section className="bg-gradient-to-b from-slate-50 to-white py-20">

            <div className="mx-auto max-w-7xl px-4">

                {/* Heading */}

                <div className="text-center">

                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 font-semibold text-primary">

                        <FiMap />

                        Nationwide Coverage

                    </span>

                    <h2 className="mt-6 text-4xl font-black text-slate-800 md:text-5xl">
                        Find Your
                        <span className="text-primary">
                            {" "}Nearest Service Center
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
                        Search any district, locate nearby courier hubs,
                        and navigate instantly with live GPS support.
                    </p>

                </div>

                {/* Stats */}

                <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">

                    <div className="stat rounded-3xl bg-white shadow">

                        <div className="stat-figure text-primary">
                            <FiMap size={28} />
                        </div>

                        <div className="stat-title">
                            Districts
                        </div>

                        <div className="stat-value text-primary">
                            64
                        </div>

                    </div>

                    <div className="stat rounded-3xl bg-white shadow">

                        <div className="stat-figure text-green-500">
                            <FiTruck size={28} />
                        </div>

                        <div className="stat-title">
                            Service Centers
                        </div>

                        <div className="stat-value text-green-500">
                            {serviceCenters.length}
                        </div>

                    </div>

                    <div className="stat rounded-3xl bg-white shadow">

                        <div className="stat-title">
                            Coverage
                        </div>

                        <div className="stat-value">
                            100%
                        </div>

                    </div>

                    <div className="stat rounded-3xl bg-white shadow">

                        <div className="stat-title">
                            Support
                        </div>

                        <div className="stat-value">
                            24/7
                        </div>

                    </div>

                </div>

                {/* Search */}

                <form
                    onSubmit={handleSearch}
                    className="mx-auto mt-12 max-w-2xl"
                >

                    <div className="join w-full shadow-xl">

                        <div className="relative flex-1">

                            <FiSearch className="absolute left-5 top-4 text-lg text-gray-400" />

                            <input
                                name="location"
                                type="text"
                                placeholder="Search district..."
                                className="input w-full bg-[#F8FAFC] border-0 shadow-inner focus:bg-white focus:ring-2 focus:ring-primary"
                            />

                        </div>

                        <button className="btn btn-primary join-item px-8">
                            Search
                        </button>

                    </div>

                </form>

                    {/* Map */}

                <div className="relative mt-12 overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-2xl">

                    {/* Floating Legend */}

                    <div className="absolute left-5 top-5 z-[999] hidden rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur lg:block">

                        <h3 className="mb-4 font-bold text-slate-800">
                            Map Legend
                        </h3>

                        <div className="space-y-3">

                            <div className="flex items-center gap-3">
                                <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                                <span className="text-sm">
                                    Your Location
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="h-4 w-4 rounded-full bg-green-500"></div>
                                <span className="text-sm">
                                    Nearest Branch
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="h-4 w-4 rounded-full bg-red-500"></div>
                                <span className="text-sm">
                                    Service Center
                                </span>
                            </div>

                        </div>

                    </div>

                    <CurrentLocationButton
                        loading={loading}
                        onLocate={getCurrentLocation}
                    />

                    <MapContainer
                        ref={mapRef}
                        center={defaultCenter}
                        zoom={8}
                        scrollWheelZoom
                        className="h-[650px] w-full rounded-3xl"
                    >

                        <ChangeView
                            center={userLocation || defaultCenter}
                            zoom={userLocation ? 12 : 8}
                        />

                        <TileLayer
                            attribution="© OpenStreetMap contributors"
                            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        />

                        {/* Current Location */}

                        {userLocation && (
                            <>
                                <Circle
                                    center={userLocation}
                                    radius={500}
                                    pathOptions={{
                                        color: "#2563eb",
                                        fillColor: "#3b82f6",
                                        fillOpacity: 0.15,
                                    }}
                                />

                                <Circle
                                    center={userLocation}
                                    radius={150}
                                    pathOptions={{
                                        color: "#2563eb",
                                        fillColor: "#3b82f6",
                                        fillOpacity: 0.35,
                                    }}
                                />

                                <Marker
                                    position={userLocation}
                                    icon={userIcon}
                                >
                                    <Popup>

                                        <div className="w-56">

                                            <h3 className="font-bold text-primary">
                                                📍 Your Current Location
                                            </h3>

                                            <p className="mt-2 text-sm text-slate-600">
                                                GPS location detected successfully.
                                            </p>

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

                                        <div className="w-72">

                                            {isNearest && (
                                                <div className="badge badge-success mb-3">
                                                    ⭐ Nearest Branch
                                                </div>
                                            )}

                                            <h2 className="text-xl font-bold text-primary">
                                                {center.district}
                                            </h2>

                                            <p className="mt-1 text-sm text-slate-500">
                                                {center.region}
                                            </p>

                                            <div className="divider my-3"></div>

                                            <h4 className="font-semibold">
                                                Covered Areas
                                            </h4>

                                            <div className="mt-3 flex flex-wrap gap-2">

                                                {center.covered_area.map(
                                                    (area) => (
                                                        <span
                                                            key={area}
                                                            className="badge badge-outline badge-primary"
                                                        >
                                                            {area}
                                                        </span>
                                                    )
                                                )}

                                            </div>

                                            {distance && (

                                                <div className="mt-5 rounded-xl bg-primary/5 p-3">

                                                    <p className="text-sm">

                                                        <span className="font-semibold">
                                                            Distance:
                                                        </span>{" "}
                                                        {distance} km

                                                    </p>

                                                </div>

                                            )}

                                            <a
                                                href={`https://www.google.com/maps/dir/?api=1&destination=${center.latitude},${center.longitude}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn btn-primary mt-5 w-full gap-2"
                                            >

                                                <FiNavigation />

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
    );
};

export default Coverage;
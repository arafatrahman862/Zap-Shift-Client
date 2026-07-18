import { useEffect } from "react";
import { useMap } from "react-leaflet";

const ChangeView = ({ center, zoom }) => {
    const map = useMap();

    useEffect(() => {
        map.flyTo(center, zoom, {
            duration: 2,
        });
    }, [center, zoom, map]);

    return null;
};

export default ChangeView;
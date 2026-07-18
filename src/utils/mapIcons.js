import L from "leaflet";

const createSvgIcon = (color) =>
    L.divIcon({
        className: "",
        html: `
        <div style="
            width:24px;
            height:24px;
            background:${color};
            border-radius:50%;
            border:4px solid white;
            box-shadow:0 0 12px rgba(0,0,0,.35);
            position:relative;
        ">
            <div style="
                width:10px;
                height:10px;
                background:white;
                border-radius:50%;
                position:absolute;
                top:3px;
                left:3px;
            "></div>
        </div>
    `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
    });

export const defaultIcon = createSvgIcon("#ef4444"); // red

export const nearestIcon = createSvgIcon("#22c55e"); // green

export const userIcon = createSvgIcon("#2563eb"); // blue
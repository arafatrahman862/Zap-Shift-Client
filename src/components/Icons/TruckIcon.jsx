const TruckIcon = ({ className = 'h-6 w-6' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
        <path d="M16 8h5v6" />
        <circle cx="5.5" cy="18.5" r="1.5" />
        <circle cx="18.5" cy="18.5" r="1.5" />
    </svg>
);

export default TruckIcon;

const ServicesHeader = ({ eyebrow = 'Our Services', title = 'What we offer' }) => {
    return (
        <div className="text-center mb-8">
            <p className="text-white font-semibold uppercase tracking-widest mb-2 opacity-90">{eyebrow}</p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{title}</h3>
        </div>
    );
};

export default ServicesHeader;

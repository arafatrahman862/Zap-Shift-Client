const HowItWorksHeader = ({ eyebrow = 'How it Works', title = 'Reliable delivery made simple' }) => {
    return (
        <div className="text-center mb-12 sm:mb-16">
            <p className="text-primary font-semibold uppercase tracking-[0.4em] mb-3">{eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">{title}</h2>
        </div>
    );
};

export default HowItWorksHeader;

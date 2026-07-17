const HowItWorksCard = ({ title, description, Icon }) => {
    return (
        <div className="card group overflow-hidden rounded-[1.5rem] border border-base-300 bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl items-center text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary shadow-sm">
                {Icon ? <Icon className="h-7 w-7" /> : (
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8l7-5 7 5v8a5 5 0 0 1-10 0V8" />
                        <path d="M9 21h6" />
                    </svg>
                )}
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
            <p className="text-sm leading-6 text-slate-600">{description}</p>
        </div>
    );
};

export default HowItWorksCard;

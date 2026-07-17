const WhyChooseUsCard = ({ image, title, description }) => {
    return (
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg md:flex-row">
            {/* Image */}
            <div className="flex w-full justify-center md:w-52 shrink-0">
                <img
                    src={image}
                    alt={title}
                    className="w-36 object-contain"
                />
            </div>

            {/* Divider */}
            <div className="hidden h-28 border-l border-dashed border-primary/30 md:block"></div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-slate-900">
                    {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default WhyChooseUsCard;
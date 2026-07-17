const WhyChooseUsCard = ({ image, title, description }) => {
    return (
        <div className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl md:p-8">
            {/* Top Accent */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-emerald-500 to-primary scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left"></div>

            <div className="flex flex-col items-center gap-8 md:flex-row">
                {/* Image */}
                <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl"></div>

                    <div className="relative flex h-36 w-36 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-emerald-100 p-4">
                        <img
                            src={image}
                            alt={title}
                            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden h-28 w-[3px] rounded-full bg-[repeating-linear-gradient(to_bottom,#10b981_0px,#10b981_8px,transparent_8px,transparent_14px)] md:block"></div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-primary">
                        {title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUsCard;
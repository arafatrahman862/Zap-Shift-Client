const ServiceCard = ({ title, description, Icon }) => {
    return (
        <div className="h-full w-full rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-full flex-col items-center">
                {/* Icon */}
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {Icon && <Icon className="h-10 w-10" />}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col text-center">
                    <h4 className="min-h-[48px] text-lg font-semibold text-slate-900">
                        {title}
                    </h4>

                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
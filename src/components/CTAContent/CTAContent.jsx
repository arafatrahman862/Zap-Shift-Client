const CTAContent = ({
    title,
    description,
    primaryBtnText,
    secondaryBtnText,
    image,
}) => {
    return (
        <div className="relative overflow-hidden rounded-3xl bg-[#083F45] px-8 py-12 lg:px-14">
            {/* Background Glow */}
            <div className="absolute -top-24 left-1/2 h-52 w-[500px] -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
                {/* Left */}
                <div className="max-w-xl text-center lg:text-left">
                    <h2 className="text-3xl font-bold leading-tight text-white lg:text-4xl">
                        {title}
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-slate-300">
                        {description}
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <button className="rounded-full bg-lime-300 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:scale-105 hover:bg-lime-400">
                            {primaryBtnText}
                        </button>

                        <button className="rounded-full border border-lime-300 px-7 py-3 text-sm font-semibold text-lime-300 transition hover:bg-lime-300 hover:text-slate-900">
                            {secondaryBtnText}
                        </button>
                    </div>
                </div>

                {/* Right */}
                <div className="flex justify-center">
                    <img
                        src={image}
                        alt="Courier"
                        className="w-72 lg:w-96 object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default CTAContent;
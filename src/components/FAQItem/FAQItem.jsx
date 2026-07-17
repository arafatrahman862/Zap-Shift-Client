import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQItem = ({ question, answer, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div
            className={`group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isOpen
                    ? "border-primary shadow-lg"
                    : "border-slate-200"
                }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between px-6 py-5"
            >
                <div className="flex items-center gap-4">

                    {/* Accent */}

                    <div
                        className={`h-10 w-1 rounded-full transition-all duration-300 ${isOpen
                                ? "bg-primary"
                                : "bg-slate-200 group-hover:bg-primary/50"
                            }`}
                    />

                    <h3 className="text-left text-base font-semibold text-slate-800">
                        {question}
                    </h3>
                </div>

                <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                            ? "bg-primary text-white"
                            : "bg-slate-100 text-slate-500 group-hover:bg-primary/10"
                        }`}
                >
                    {isOpen ? (
                        <FiChevronUp size={20} />
                    ) : (
                        <FiChevronDown size={20} />
                    )}
                </div>
            </button>

            <div
                className={`grid transition-all duration-500 ${isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="border-t border-slate-100 px-11 pb-6 pt-5 text-sm leading-7 text-slate-600">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQItem;
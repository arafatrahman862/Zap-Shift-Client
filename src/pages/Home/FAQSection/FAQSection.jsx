import { FiArrowUpRight } from "react-icons/fi";
import FAQItem from "../../../components/FAQItem/FAQItem";

const faqs = [
    {
        question: "How does parcel tracking work?",
        answer:
            "Track your shipment in real-time using our live tracking system. From pickup to delivery, you'll receive instant updates about your parcel's journey.",
    },
    {
        question: "How long does delivery take?",
        answer:
            "Inside Dhaka, express delivery usually takes 4–6 hours. Nationwide deliveries are completed within 24–72 hours depending on the destination.",
    },
    {
        question: "Is Cash on Delivery available?",
        answer:
            "Yes! We provide Cash on Delivery (COD) services across Bangladesh with secure payment settlement for merchants.",
    },
    {
        question: "Can I return a parcel?",
        answer:
            "Absolutely. Our reverse logistics service allows customers to return or exchange products easily.",
    },
    {
        question: "How can I contact customer support?",
        answer:
            "Our support team is available 24/7 via phone, email, and live chat to assist with any delivery-related issues.",
    },
];

const FAQSection = () => {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-20">
            {/* Background Blur */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl"></div>

            <div className="relative mx-auto max-w-5xl px-4">

                {/* Heading */}

                <div className="text-center">
                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                        Frequently Asked Questions
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
                        Everything You Need to Know
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
                        Find quick answers about deliveries, tracking,
                        merchants, payments, and our courier services.
                    </p>
                </div>

                {/* Accordion */}

                <div className="mt-14 space-y-5">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={faq.question}
                            question={faq.question}
                            answer={faq.answer}
                            defaultOpen={index === 0}
                        />
                    ))}
                </div>

                {/* Button */}

                <div className="mt-14 flex justify-center">
                    <button className="group flex items-center gap-4 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        View All FAQs

                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary transition-all duration-300 group-hover:rotate-45">
                            <FiArrowUpRight size={18} />
                        </span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default FAQSection;
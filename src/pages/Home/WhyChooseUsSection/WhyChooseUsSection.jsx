import WhyChooseUsCard from "../../../components/WhyChooseUsCard/WhyChooseUsCard";
import p1 from "../../../assets/live-tracking.png"
import p2 from "../../../assets/safe-delivery.png"
import p3 from "../../../assets/safe-delivery.png"

const features = [
    {
        image: p1,
        title: "Live Parcel Tracking",
        description:
            "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and receive instant status updates for complete peace of mind.",
    },
    {
        image: p2,
        title: "100% Safe Delivery",
        description:
            "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
        image: p3,
        title: "24/7 Call Center Support",
        description:
            "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
];

const WhyChooseUsSection = () => {
    return (
        <section className="bg-slate-100 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rounded-3xl bg-linear-to-b from-slate-100 to-slate-50 p-8 shadow-lg md:p-12">
                {/* Heading */}
                <div className="text-center">
                    <p className="text-primary font-semibold uppercase tracking-wider">
                        Why Choose Us
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                        Why Businesses Trust Our Logistics Service
                    </h2>
                </div>

                {/* Cards */}
                <div className="mt-12 space-y-6">
                    {features.map((feature) => (
                        <WhyChooseUsCard
                            key={feature.title}
                            image={feature.image}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
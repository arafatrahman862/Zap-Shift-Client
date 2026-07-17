import courierImage from "../../../assets/location-merchant.png";
import CTAContent from "../../../components/CTAContent/CTAContent";

const CTASection = () => {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <CTAContent
                    title="Merchant and Customer Satisfaction is Our First Priority"
                    description="We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao Courier delivers your parcels all over Bangladesh right on time."
                    primaryBtnText="Become a Merchant"
                    secondaryBtnText="Earn with Courier"
                    image={courierImage}
                />
            </div>
        </section>
    );
};

export default CTASection;
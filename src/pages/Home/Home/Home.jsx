import ServicesSection from "../ServicesSection/ServicesSection";
import HowItWorks from "../../HowItWorks/HowItWorks";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import WhyChooseUsSection from "../WhyChooseUsSection/WhyChooseUsSection";
import CTASection from "../CTASection/CTASection";
import FAQSection from "../FAQSection/FAQSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <ServicesSection></ServicesSection>
            <Brands></Brands>
            <WhyChooseUsSection></WhyChooseUsSection>
            <CTASection></CTASection>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;
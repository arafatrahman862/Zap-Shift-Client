import ServicesSection from "../ServicesSection/ServicesSection";
import HowItWorks from "../../HowItWorks/HowItWorks";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <ServicesSection></ServicesSection>
            <Brands></Brands>
        </div>
    );
};

export default Home;
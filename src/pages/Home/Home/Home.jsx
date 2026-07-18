import ServicesSection from "../ServicesSection/ServicesSection";
import HowItWorks from "../../HowItWorks/HowItWorks";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import WhyChooseUsSection from "../WhyChooseUsSection/WhyChooseUsSection";
import CTASection from "../CTASection/CTASection";
import FAQSection from "../FAQSection/FAQSection";
import Reviews from "../Reviews/Reviews";

const reviewsPromise = fetch('/reviews.json').then((res) => res.json());

const Home = () => {
    return (
        <div>
            <section id="home"><Banner></Banner></section>
            <section id="how-it-works"><HowItWorks></HowItWorks></section>
            <section id="services"><ServicesSection></ServicesSection></section>
            <section id="brands"><Brands></Brands></section>
            <section id="why-us"><WhyChooseUsSection></WhyChooseUsSection></section>
            <section id="cta"><CTASection></CTASection></section>
            <section id="reviews"><Reviews reviewsPromise={reviewsPromise}></Reviews></section>
            <section id="faq"><FAQSection></FAQSection></section>
        </div>
    );
};

export default Home;
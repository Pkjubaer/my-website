import Blogs from "./Blogs"
import ComapnyLogos from "./CompanyLogos"
import FaqSection from "./FAQSection"
import HeroSection from "./HeroSection"
import NewsLetter from "./NewsLetter"
import Princing from "./PricingSection"
import Services from "./Services"
import TeamSection from "./TeamSection"
import Testimonial from "./Testomonial"
import TotalSection from "./TotalSection"

const Home = () =>{
    return (
        <div>
            <HeroSection/>
            <TotalSection/>
            <ComapnyLogos/>
            <Services/>
            <Testimonial/>
            <Blogs/>
            <TeamSection/>
            <Princing/>
            <FaqSection/>
            <NewsLetter/>
        </div>
    )
}

export default Home
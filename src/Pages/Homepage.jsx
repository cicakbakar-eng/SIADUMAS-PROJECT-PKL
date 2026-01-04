import HeroSection from "../component/sections/Hero";
import SectionLayananPublik from "../component/sections/LayananPublik";
import SectionAlurPelayanan from "../component/sections/AlurPelayanan";
import NavbarAdumas from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";

function Homepage() {
    return (
        <div>
            <NavbarAdumas />
            <HeroSection />
            <SectionLayananPublik/>
            <SectionAlurPelayanan/>
            <Footer />
        </div>
        
    );
}
export default Homepage;
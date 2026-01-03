import HeroSection from "../component/sections/Hero";
import SectionLayananPublik from "../component/sections/LayananPublik";
import SectionAlurPelayanan from "../component/sections/AlurPelayanan";

function Homepage() {
    return (
        <div>
            <HeroSection />
            <SectionLayananPublik/>
            <SectionAlurPelayanan/>
        </div>
        
    );
}
export default Homepage;
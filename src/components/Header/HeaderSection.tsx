import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import banner from '/images/banner.jpg'

const HeaderSection = () => {
    
    return (
        <div className="lg:relative">
     <div className="lg:fixed lg:w-full">
     <Navbar/>
     </div>
            <Banner imageUrl={banner} />
            
        </div>
    );
};

export default HeaderSection;
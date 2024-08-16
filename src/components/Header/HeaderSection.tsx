import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";


const HeaderSection = () => {
    const bannerImageUrl = 'https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/top_banner/c8c2e326_f0dd_4f0d_8972_b748b556d2af/Banner-2.jpg';
    return (
        <div>
            <Navbar/>
            <Banner imageUrl={bannerImageUrl} />
            
        </div>
    );
};

export default HeaderSection;
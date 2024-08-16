import AdvisorAndSecretarySection from "../../components/AdvisorAndSecretarySection/AdvisorAndSecretarySection";
import EmergencyHotline from "../../components/Emergency Hotline/EmergencyHotline";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import ImportantLinkSection from "../../components/ImportantLinkSection";
import NoticeboardSection from "../../components/NoticeBoard/NoticeboardSEction";


const Home = () => {
    return (
        <div   className="">
            <ImportantLinkSection/>
       <NoticeboardSection/>
       <FeatureSection/>
       
       <EmergencyHotline/>
       <AdvisorAndSecretarySection/>
     
        </div>
    );
};

export default Home;
import AdvisorAndSecretarySection from "../../components/AdvisorAndSecretarySection/AdvisorAndSecretarySection";
import EmergencyHotline from "../../components/Emergency Hotline/EmergencyHotline";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import NoticeboardSection from "../../components/NoticeBoard/NoticeboardSEction";


const Home = () => {
    return (
        <div   className="">
       <NoticeboardSection/>
       <FeatureSection/>
       <AdvisorAndSecretarySection/>
       <EmergencyHotline/>
     
        </div>
    );
};

export default Home;
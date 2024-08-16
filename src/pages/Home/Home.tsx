import AdvisorAndSecretarySection from "../../components/AdvisorAndSecretarySection/AdvisorAndSecretarySection";
import Container from "../../components/Container/Container";
import EmergencyHotline from "../../components/Emergency Hotline/EmergencyHotline";
import FeatureSection from "../../components/FeatureSection/FeatureSection";

import ImportantLinkSection from "../../components/ImportantLinkSection";
import NoticeboardSection from "../../components/NoticeBoard/NoticeboardSection";



const Home = () => {
    return (
       
        <Container>
        <ImportantLinkSection/>
       <NoticeboardSection/>

       <FeatureSection/>
       <EmergencyHotline/>
       <AdvisorAndSecretarySection/>
       <div>
        hijjjjj
       </div>
        </Container>
     
    );
};

export default Home;
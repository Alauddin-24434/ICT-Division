
import AdvisorAndSecretarySection from "../../components/AdvisorAndSecretarySection/AdvisorAndSecretarySection";
import Container from "../../components/Container/Container";
import EmergencyHotline from "../../components/Emergency Hotline/EmergencyHotline";

import FeatureSection from "../../components/FeatureSection/FeatureSection";
import ImportantLinks from "../../components/ImportantLinkSection/ImportantLinkSection";


import NoticeboardSection from "../../components/NoticeBoard/NoticeboardSection";
import VideoSection from "../../components/VideoSection/VideoSection";
import VisitorCounter from "../../components/VisitiorCounter/VisitiorCounter";



const Home = () => {
    return (
       
        <Container>
      
       <NoticeboardSection/>
    
       <FeatureSection/>
       <EmergencyHotline/>

  <ImportantLinks/>
  <AdvisorAndSecretarySection/>
  <VideoSection/>
       <VisitorCounter/>
      
       
        </Container>
     
    );
};

export default Home;
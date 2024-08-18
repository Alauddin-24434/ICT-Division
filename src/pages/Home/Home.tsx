
import Container from "../../components/Container/Container";
import EmergencyHotline from "../../components/Emergency Hotline/EmergencyHotline";

import FeatureSection from "../../components/FeatureSection/FeatureSection";
import KeyResources from "../../components/Key Resources/KeyResources";


import NoticeboardSection from "../../components/NoticeBoard/NoticeboardSection";
import VisitorCounter from "../../components/VisitiorCounter/VisitiorCounter";



const Home = () => {
    return (
       
        <Container>
      
       <NoticeboardSection/>
     <KeyResources/>
       <FeatureSection/>
       <EmergencyHotline/>
       <VisitorCounter/>
      
       
        </Container>
     
    );
};

export default Home;
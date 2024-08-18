
import Container from "../../components/Container/Container";
import EmergencyHotline from "../../components/Emergency Hotline/EmergencyHotline";

import FeatureSection from "../../components/FeatureSection/FeatureSection";


import NoticeboardSection from "../../components/NoticeBoard/NoticeboardSection";
import VisitorCounter from "../../components/VisitiorCounter/VisitiorCounter";



const Home = () => {
    return (
       
        <Container>
      
       <NoticeboardSection/>
    
       <FeatureSection/>
       <EmergencyHotline/>
  
       <VisitorCounter/>
      
       
        </Container>
     
    );
};

export default Home;
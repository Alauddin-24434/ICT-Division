
import Container from "../../components/Container/Container";
import EmergencyHotline from "../../components/Emergency Hotline/EmergencyHotline";
import FeatureSection from "../../components/FeatureSection/FeatureSection";


import NoticeboardSection from "../../components/NoticeBoard/NoticeboardSection";



const Home = () => {
    return (
       
        <Container>
      
       <NoticeboardSection/>
     
       <FeatureSection/>
       <EmergencyHotline/>
      
       
        </Container>
     
    );
};

export default Home;
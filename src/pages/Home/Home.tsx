import AdvisorAndSecretarySection from "../../components/AdvisorAndSecretarySection/AdvisorAndSecretarySection";
import ContactUs from "../../components/ContactUs/ContactUs";
import Container from "../../components/Shared/Container/Container";
import EmergencyHotline from "../../components/Emergency Hotline/EmergencyHotline";

import FeatureSection from "../../components/FeatureSection/FeatureSection";
import ImportantLinks from "../../components/ImportantLinkSection/ImportantLinkSection";
import InternalEServiceSection from "../../components/InternalEServiceSection/InternalEServiceSection";

import NoticeboardSection from "../../components/NoticeBoard/NoticeboardSection";


import VideoSection from "../../components/VideoSection/VideoSection";
import VisitorCounter from "../../components/VisitiorCounter/VisitiorCounter";
import WeCollaborate from "../../components/WeCollaborate/WeCollaborate";

const Home = () => {
  return (
    <Container>
      <NoticeboardSection />

      <FeatureSection />
      <EmergencyHotline />
      <InternalEServiceSection />
      <ImportantLinks />
      <AdvisorAndSecretarySection />
      <VideoSection />

      <ContactUs />
      {/* We collaborate with */}
    <WeCollaborate/>
      <VisitorCounter />
    </Container>
  );
};

export default Home;

import { Outlet } from 'react-router-dom';
import HeaderSection from '../components/Header/HeaderSection';
import Footer from '../components/Footer/Footer';
import MessengerModalSection from '../components/MessengerModalSection/MessengerModalSection';


const MainLayout = () => {
    return (
        <div className="mx-auto max-w-full bg-[#e7d8e7] relative">
            {/* Header or Navbar */}
            <HeaderSection/>

            {/* Main Content */}
            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <Footer/>

            {/* Messenger Modal Section */}
            <div className="fixed bottom-8 right-8">
                <MessengerModalSection />
            </div>
        </div>
    );
};

export default MainLayout;

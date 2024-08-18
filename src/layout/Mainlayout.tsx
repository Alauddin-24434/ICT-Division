
import { Outlet } from 'react-router-dom';
import HeaderSection from '../components/Header/HeaderSection';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="mx-auto max-w-full bg-[#fbf6fb]">
            {/* Header or Navbar */}
         <HeaderSection/>

            {/* Main Content */}
            <main className=" ">
                <Outlet />
            </main>

            {/* Footer */}
           <Footer/>
        </div>
    );
};

export default MainLayout;

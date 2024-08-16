
import { Outlet } from 'react-router-dom';
import HeaderSection from '../components/Header/HeaderSection';

const MainLayout = () => {
    return (
        <div className="mx-auto max-w-full bg-[#e6fbf9]">
            {/* Header or Navbar */}
         <HeaderSection/>

            {/* Main Content */}
            <main className=" ">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="mt-8">
                <p className="text-center text-gray-500">© 2024 Your Company</p>
            </footer>
        </div>
    );
};

export default MainLayout;

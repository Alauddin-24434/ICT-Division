
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className=" navbar shadow-md">
            {/* Top Section with Social Media Icons */}
            <div className="flex justify-end items-center p-2 space-x-4 text-gray-600">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="hover:text-blue-600" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="hover:text-blue-400" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-700" />
                </a>
            </div>

            {/* Horizontal Line Divider */}
            <hr className="border-gray-300" />

            {/* Bottom Section with Logo, Navigation Links, and Search Bar */}
            <nav className="flex bg-[#05dac3] justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <Link to="/">Logo</Link>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6 text-gray-600">
                    <li><Link to="/" className="hover:text-gray-800">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-800">About Us</Link></li>
                    <li><Link to="/offices" className="hover:text-gray-800">Affiliated Offices/Institutions</Link></li>
                    <li><Link to="/projects" className="hover:text-gray-800">Project/Program</Link></li>
                    <li><Link to="/gallery" className="hover:text-gray-800">Gallery</Link></li>
                    <li><Link to="/policy" className="hover:text-gray-800">Acts/Policy</Link></li>
                    <li><Link to="/e-services" className="hover:text-gray-800">E-services</Link></li>
                    <li><Link to="/contact-comment" className="hover:text-gray-800">Contact & Comment</Link></li>
                </ul>

                {/* Search Bar */}
                <div>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="border border-gray-300 p-2 rounded-md"
                    />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

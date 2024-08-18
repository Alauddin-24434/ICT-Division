

const Footer = () => {
    return (
        <footer className="bg-[#3b3d83]  py-8 text-gray-400">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo or Company Name */}
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <h2 className="text-xl font-bold text-white">ICT</h2>
                    </div>

                 

                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                {/* Facebook Icon */}
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.656-4.788 1.324 0 2.463.099 2.797.143v3.244l-1.919.001c-1.504 0-1.796.714-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z"/>
                            </svg>
                        </a>
                        <a href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                {/* Twitter Icon */}
                                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.724-.95.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.924 2.201-4.924 4.917 0 .39.045.765.127 1.124C7.69 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.248-2.228-.617v.061c0 2.385 1.698 4.374 3.95 4.829-.413.112-.85.171-1.298.171-.314 0-.615-.03-.916-.085.617 1.926 2.407 3.33 4.527 3.367-1.664 1.3-3.757 2.073-6.034 2.073-.393 0-.779-.022-1.161-.067 2.146 1.381 4.7 2.185 7.439 2.185 8.926 0 13.816-7.391 13.816-13.797 0-.209-.004-.419-.014-.63.947-.686 1.771-1.543 2.42-2.518z"/>
                            </svg>
                        </a>
                        <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                {/* LinkedIn Icon */}
                                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.452H3.556V9.09H7.12v11.362zM5.335 7.715c-1.137 0-2.058-.929-2.058-2.073 0-1.146.921-2.073 2.058-2.073 1.137 0 2.057.928 2.057 2.073 0 1.144-.92 2.073-2.057 2.073zm14.943 12.737h-3.565v-5.562c0-1.33-.026-3.04-1.852-3.04-1.854 0-2.139 1.448-2.139 2.944v5.658H8.621V9.09h3.417v1.554h.05c.475-.899 1.637-1.848 3.368-1.848 3.604 0 4.268 2.371 4.268 5.454v6.202z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-4 text-center text-white">
                    <p>© 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

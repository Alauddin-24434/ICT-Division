import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Banner = ({ imageUrl }: any) => {
    useEffect(() => {
        AOS.init({ duration: 3000 }); // Initialize AOS with custom options
    }, []);

    return (
        <div
            className="banner-container w-full h-64 sm:h-72 md:h-96 lg:h-[500px] flex justify-start items-center text-white"
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                padding: '20px',
            }}
        >
            <div
                data-aos="fade-up"
                className="banner-content max-w-full mx-4 md:mx-8 lg:ml-12"
            >
                <h1 className="text-2xl md:text-4xl lg:text-5xl leading-tight">
                    ICT Division
                </h1>
                <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed mt-2">
                    Government of the People's Republic of Bangladesh
                </p>
            </div>
        </div>
    );
};

export default Banner;

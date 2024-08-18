import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import hero from '/images/banner/hero.png';
import AdSlider from '../../AdsSlider/AdsSlider';

const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 }); // Initialize AOS with custom options
    }, []);

    return (
      <div className='bg-[#f4e8f6]'>
          <div className="relative mx-auto max-w-7xl h-64 sm:h-72 md:h-96 lg:h-screen  overflow-hidden">
            
            <div className="flex flex-col md:flex-row items-center justify-between w-full p-4">
                {/* Text Content */}
                <div  data-aos="fade-up" className="flex-1 text-center md:text-left md:mr-4">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#6265da] leading-tight mb-2">
                        ICT Division
                    </h1>
                    <p className="text-sm md:text-lg text-[#6265da] leading-relaxed">
                        Government of the People's Republic of Bangladesh
                    </p>
                </div>

                {/* Illustrator Image */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <img
                    data-aos="fade-right"
                        src={hero}
                        alt="Illustrator"
                        className="object-contain w-full h-64 md:h-80 lg:h-full"
                    />
                </div>
            </div>
           
         
        
        </div>
        <AdSlider/>
      </div>
    );
};

export default Banner;

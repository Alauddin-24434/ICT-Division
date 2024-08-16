import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


const Banner = ({ imageUrl }) => {
    useEffect(() => {
        AOS.init({ duration: 3000 }); // Initialize AOS with custom options
    }, []);

    return (
        <div 
            className="banner-container"
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '700px', // Adjust height as needed
                display: 'flex',
                justifyContent: 'flex-start', // Aligns content to the left
                alignItems: 'center',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                padding: '20px'
            }}
        >
            <div data-aos="fade-up" className="banner-content" style={{ maxWidth: '800px', marginLeft: '50px' }}>
                <h1 className='text-5xl leading-tight'>ICT Division</h1>
                <p className='text-3xl leading-relaxed'>
                    Government of the People's Republic of Bangladesh
                </p>
            </div>
        </div>
    );
};

export default Banner;

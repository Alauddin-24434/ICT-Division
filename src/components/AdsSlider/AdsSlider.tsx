import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './AdsSlider.css'; // Import the CSS for custom styles

const AdSlider: React.FC = () => {
    const ads = [
        { id: 1, text: 'এম-পক্স সতর্কতা ১ - ফুসকুড়ি বা জ্বর দেখা দিলে অবিলম্বে চিকিৎসা নিন।' },
        { id: 2, text: 'এম-পক্স সতর্কতা ২ - এম-পক্সে আক্রান্ত ব্যক্তির সঙ্গে শারীরিক সংস্পর্শ এড়িয়ে চলুন।' },
        { id: 3, text: 'এম-পক্স সতর্কতা ৩ - এম-পক্সের লক্ষণযুক্ত ব্যক্তির ব্যবহৃত জিনিসপত্র স্পর্শ করবেন না।' },
        { id: 4, text: 'এম-পক্স সতর্কতা ৪ - পশুদের মাধ্যমে ভাইরাস ছড়াতে পারে, তাই সতর্ক থাকুন।' },
        { id: 5, text: 'এম-পক্স সতর্কতা ৫ - ফুসকুড়ি, ক্ষত, বা শ্বাসকষ্টের সমস্যা দেখা দিলে ডাক্তার দেখান।' },
        { id: 6, text: 'এম-পক্স সতর্কতা ৬ - ব্যক্তিগত স্বাস্থ্যবিধি মেনে চলুন এবং জনসমাগম এড়িয়ে চলুন।' },
    ];

    return (
        <div className="ad-slider overflow-hidden whitespace-nowrap mx-auto max-w-7xl hidden md:block lg:block xl:block 2xl:block">
            <div className="flex items-center">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-600 mr-2" />
                <p className="text-red-600 font-bold text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">High Alert</p>
            </div>
            <div className="ad-slider-track flex items-center">
            {ads.map((ad) => (
                    <div key={ad.id + '-duplicate'} className="ad-card bg-purple-500 text-white text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl py-2 px-4 m-2">
                        {ad.text}
                    </div>
                ))}
                
                
            </div>
        </div>
    );
};

export default AdSlider;

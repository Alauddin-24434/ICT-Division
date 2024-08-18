import { useSpring, animated } from 'react-spring'; // Ensure you have react-spring installed

const PlanningAndImplementationSection = () => {
    const planningData = [
        { imgSrc: "https://i.ibb.co/8KNzK9G/prothomalo-english-2023-08-a8d2a70a-00f8-4220-99de-50268930900f-a2i.webp" },
        { imgSrc: "https://i.ibb.co/zHPX96F/image-203123-1723193106.png" },
        { imgSrc: "https://i.ibb.co/hVHRrYs/1642191134-3.jpg" },
        { imgSrc: "https://i.ibb.co/7Q6Z4NV/ju-UNDP-logo.png" },
        { imgSrc: "https://i.ibb.co/p1pJRC4/63-633076-department-of-information-communication-technology-department-of-ict-logo.jpg" },
        { imgSrc: "https://i.ibb.co/1d5gfJK/BASIS-logo-mockup2.jpg" }
    ];

    const sectionProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

    return (
        <section data-aos="fade-up" className="p-4">
            <h2 className="mb-12 text-lg md:text-xl lg:text-2xl font-bold text-[#6265da] text-center">
                We collaborate with
            </h2>
            <div className="max-w-7xl mx-auto">
                <animated.div style={sectionProps} className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {planningData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-md flex items-center justify-center transition-transform transform hover:scale-105 hover:bg-gray-50 cursor-pointer"
                            style={{ width: '100%', maxWidth: '150px', height: 'auto' }}
                        >
                            <img
                                src={item.imgSrc}
                                alt={`Image ${index}`}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    ))}
                </animated.div>
            </div>
        </section>
    );
};

export default PlanningAndImplementationSection;

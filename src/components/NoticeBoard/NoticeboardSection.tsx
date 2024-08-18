
import { useSpring, animated } from "@react-spring/web";

// KeyResources Component
const KeyResources = () => {
    const cardData = [
        { title: 'Office Attachment Application Form' },
        { title: 'Information and Communication Technology technology ranks first' },
        { title: 'Bangladesh E-Directory' },
        { title: 'Digital Services of this Services' },
        { title: 'Government Services In one Address' },
        { title: 'What to do to prevent dengue' }
    ];

    return (
        <section className="flex-1">
            <div className="w-full mx-auto">
                <div data-aos="fade-up" className="grid grid-cols-2 gap-6">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="cursor-pointer shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full bg-white"
                        >
                            <div className="p-4">
                                <h3 className="text-sm font-semibold mb-2  text-gray-700 text-center">
                                    {card.title.slice(0, 24)}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// NoticeboardSection Component
const NoticeboardSection = () => {
    const notices = [
        { title: "Notification (Memorandum-68, Permanentization of Jobs...)", id: 1 },
        { title: "Office Order (Distribution of Responsibilities)", id: 2 },
        { title: "Notification for the financial year 2024-2025", id: 3 },
        { title: "e-Tender For “Procurement of Food and Refreshment...", id: 4 },
        { title: "Office Order (Release, Mr. Mirza Murad Hasan Beg...)", id: 6 },
    ];

    const boardProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

    return (
        <section className="p-6">
          <h1 className="my-8 un sm:my-8 md:my-16 lg:my-16 xl:my-16 2xl:my-16 text-center text-2xl md:text-4xl text-[#6265da] font-bold">
                Noticeboard & Important Resources
            </h1>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
                <div data-aos="fade-up" className="flex-1">
                    <animated.div style={boardProps}>
                        <div className="space-y-4">
                            {notices.map((notice) => (
                                <div
                                    key={notice.id}
                                    className="bg-white shadow-md border-l-4 border-purple-800 p-4 rounded-md  transition-transform transform hover:translate-x-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    <h3 className="text-lg text-gray-700">
                                        {notice.title.slice(0, 66)}...
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </animated.div>
                </div>

                <KeyResources />
            </div>
        </section>
    );
};

export default NoticeboardSection;

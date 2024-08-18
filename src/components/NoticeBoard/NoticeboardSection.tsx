
import { useSpring, animated } from "@react-spring/web";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faComputer, faBook, faMobileAlt, faHome, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

// KeyResources Component
const KeyResources = () => {
    const cardData = [
        { title: 'Office Attachment Application Form', icon: faFileAlt },
        { title: 'Information and Communication Technology technology ranks first', icon: faComputer },
        { title: 'Bangladesh E-Directory', icon: faBook },
        { title: 'Digital Services of this Services', icon: faMobileAlt },
        { title: 'Government Services In one Address', icon: faHome },
        { title: 'What to do to prevent dengue', icon: faShieldAlt }
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
                            <div className="p-4 flex items-center">
                                <FontAwesomeIcon 
                                    icon={card.icon}
                                    className="text-purple-500 mr-4 text-xl"
                                />
                                <h3 className="text-sm  mb-2 text-gray-800">
                                    {card.title.length > 24 ? `${card.title.slice(0, 24)}...` : card.title}
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

import { faBell,  faCalendar, faClipboardList, faFileInvoice } from '@fortawesome/free-solid-svg-icons';


const NoticeboardSection = () => {
    const notices = [
        { title: "Notification (Memorandum-68, Permanentization of Jobs...)", id: 1, icon: faBell },
        { title: "Office Order (Distribution of Responsibilities)", id: 2, icon: faClipboardList },
        { title: "Notification for the financial year 2024-2025", id: 3, icon: faCalendar },
        { title: "e-Tender For “Procurement of Food and Refreshment...", id: 4, icon: faFileInvoice },
        { title: "Office Order (Release, Mr. Mirza Murad Hasan Beg...)", id: 5, icon: faFileAlt },
    ];

    const boardProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

    return (
        <section data-aos="fade-up" className="p-6">
            <h1 className="my-8 sm:my-8 md:my-16 lg:my-16 xl:my-16 2xl:my-16 text-center text-xl md:text-2xl text-[#6265da] font-bold">
                Noticeboard & Important Resources
            </h1>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <animated.div style={boardProps}>
                        <div className="space-y-4">
                            {notices.map((notice) => (
                                <div
                                    key={notice.id}
                                    className="bg-white shadow-md border-l-4 border-purple-500 p-4 rounded-md flex items-center space-x-4 transition-transform transform hover:translate-x-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    <FontAwesomeIcon
                                        icon={notice.icon}
                                        className="text-purple-500 text-xl"
                                    />
                                    <h3 className="text-lg text-gray-700">
                                        {notice.title.length > 66 ? `${notice.title.slice(0, 66)}...` : notice.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </animated.div>
                </div>

                {/* Assume KeyResources is defined elsewhere */}
                <KeyResources />
            </div>
        </section>
    );
};

export default NoticeboardSection;




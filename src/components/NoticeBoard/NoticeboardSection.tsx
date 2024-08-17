
import { useSpring, animated } from '@react-spring/web';

import './NoticeboardSection.css'; // Import CSS for additional styling
import AdvisorAndSecretarySection from '../AdvisorAndSecretarySection/AdvisorAndSecretarySection';

const notices = [
    { title: "Notification (Memorandum-68, Permanentization of Jobs, Programmer and Assistant Programmer, Information and Eligibility...)", id: 1 },
    { title: "Office Order (Distribution of Responsibilities)", id: 2 },
    { title: "Notification for the financial year 2024-2025", id: 3 },
    { title: "e-Tender For “Procurement of Food and Refreshment for Aspire to Innovate (a2i) Progr...", id: 4 },
    { title: "Office Order (Release, Mr. Mirza Murad Hasan Beg, Deputy Director)", id: 6 },
    { title: "Office Order (Release, Mr. Mirza Murad Hasan Beg, Deputy Director)", id: 7 },
    { title: "Office Order (Release, Mr. Mirza Murad Hasan Beg, Deputy Director)", id:  8},
    { title: "Office Order (Release, Mr. Mirza Murad Hasan Beg, Deputy Director)", id:  9},
];

const NoticeboardSection = () => {
   

    const boardProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 }
    });

    return (
        <div  data-aos="fade-up">
             <h2 className="noticeboard-title">Noticeboard</h2>
            <section className="noticeboard ">
           
           
            <animated.div style={boardProps} className="">
           
                <div className="notice-list">
                    {notices.map((notice) => (
                        <div key={notice.id} className="notice-item">
                            <h3 className="notice-title">{notice.title.slice(0,66)}...</h3>
                        </div>
                    ))}
                </div>
            </animated.div>
            <AdvisorAndSecretarySection/>
        </section>
       
        </div>
    );
};

export default NoticeboardSection;

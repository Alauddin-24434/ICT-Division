import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendar,
  faClipboardList,
  faFileInvoice,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "@react-spring/web";

const NoticeBoard = ({ showAll}:any) => {
  const notices = [
    {
      title: "Notification (Memorandum-68, Permanentization of Jobs...)",
      id: 1,
      icon: faBell,
    },
    {
      title: "Office Order (Distribution of Responsibilities)",
      id: 2,
      icon: faClipboardList,
    },
    {
      title: "Notification for the financial year 2024-2025",
      id: 3,
      icon: faCalendar,
    },
    {
      title: "e-Tender For “Procurement of Food and Refreshment...",
      id: 4,
      icon: faFileInvoice,
    },
    {
      title: "Office Order (Release, Mr. Mirza Murad Hasan Beg...)",
      id: 5,
      icon: faFileAlt,
    },
  ];

  // Show only 4 notices if `showAll` is false
  const visibleNotices = showAll ? notices : notices.slice(0, 2);

  const boardProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <animated.div style={boardProps}>
            <div className="space-y-4">
              {visibleNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="bg-white shadow-md border-l-4 border-purple-500 p-4 rounded-md flex items-center space-x-4 transition-transform transform hover:translate-x-2 hover:bg-gray-100 cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={notice.icon}
                    className="text-purple-500 text-xl"
                  />
                  <h3 className="text-lg text-gray-700">
                    {notice.title.length > 66
                      ? `${notice.title.slice(0, 66)}...`
                      : notice.title}
                  </h3>
                </div>
              ))}
            </div>
          </animated.div>
        </div>
      </div>

     
    </div>
  );
};

export default NoticeBoard;

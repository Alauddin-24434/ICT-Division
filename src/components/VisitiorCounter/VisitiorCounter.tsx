import { FaEye, FaCalendarAlt, FaUsers, } from "react-icons/fa"; // Import icons
import SectionTitle from "../Shared/SectionTitle/SectionTilte";

// Define the types for the VisitorCard props
interface VisitorCardProps {
  icon: any;
  title: string;
  count: number;
}

// Card Component
const VisitorCard: React.FC<VisitorCardProps> = ({ icon: Icon, title, count }) => {
  return (
    <div className="relative group h-36 flex flex-col rounded-xl bg-purple-500 bg-clip-border text-gray-700 shadow-md">
      <a href="#" className="block">
        <div className="h-16">
          <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-40%] group-hover:opacity-[0.9] bg-white shadow-md border duration-300 w-[90%] h-36 rounded-xl justify-items-center align-middle">
            <div className="flex justify-center items-center">
              <p className="w-36 h-24 mt-6 text-center m-auto">{title}</p>
            </div>
          </div>
        </div>
        <div className="p-6 z-10 w-full">
          <p className="mt-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased">
            <span className="flex items-center justify-center text-[#fff] gap-4">
              {count}
              <Icon className="text-2xl mr-4" />
            </span>
          </p>
        </div>
      </a>
    </div>
  );
};

// Define the structure of visitor data
interface VisitorData {
  title: string;
  count: number;
  icon: any;
}

const VisitorCounter: React.FC = () => {
  const visitorData: VisitorData[] = [
    { title: "Today", count: 300, icon: FaCalendarAlt },
    { title: "Yesterday", count: 250, icon: FaCalendarAlt },
    { title: "Total Visitors", count: 5000, icon: FaUsers },
    { title: "Online Now", count: 20, icon: FaEye },
  ];

  return (
    <div data-aos="fade-up" className="visitor-counter p-4 rounded-lg">
     
        <div className="px-[12px] md:px-24 xl:px-12">
        <SectionTitle title="   Visitor Statistics"  />
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-28 lg:gap-y-16">
            {visitorData.map((data, index) => (
              <VisitorCard key={index} {...data} />
            ))}
          </div>
        </div>
   
    </div>
  );
};

export default VisitorCounter;

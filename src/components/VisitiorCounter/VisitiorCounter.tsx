import { useEffect, useState } from 'react';
import { FaEye, FaCalendarDay, FaCalendarAlt, FaUsers } from 'react-icons/fa'; // Import icons

const VisitorCounter = () => {
    const [today, setToday] = useState(0);
    const [yesterday, setYesterday] = useState(0);
    const [total, setTotal] = useState(0);
    const [online, setOnline] = useState(0);

    useEffect(() => {
        // Mock data - Replace these with actual API calls to fetch the visitor data
        setToday(150);
        setYesterday(120);
        setTotal(10000);
        setOnline(5);

        // Example API calls:
        // fetch('/api/visitors/today').then(res => res.json()).then(data => setToday(data.count));
        // fetch('/api/visitors/yesterday').then(res => res.json()).then(data => setYesterday(data.count));
        // fetch('/api/visitors/total').then(res => res.json()).then(data => setTotal(data.count));
        // fetch('/api/visitors/online').then(res => res.json()).then(data => setOnline(data.count));
    }, []);

    return (
        <div data-aos="fade-up" className="visitor-counter p-4 rounded-lg ">
          
          <h1 className="mb-[48px] text-center text-xl md:text-2xl text-[#6265da] font-bold">Visitor Statistics</h1>
            <div   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <FaCalendarDay className="text-purple-500 text-2xl mr-4" />
                    <div>
                        <h3 className="text-xl text-[#000] font-semibold">Today</h3>
                        <p className="text-lg">{today}</p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <FaCalendarAlt className="text-purple-500 text-2xl mr-4" />
                    <div>
                        <h3 className="text-xl  text-[#000] font-semibold">Yesterday</h3>
                        <p className="text-lg">{yesterday}</p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <FaUsers className="text-purple-500 text-2xl mr-4" />
                    <div>
                        <h3 className="text-xl  text-[#000] font-semibold">Total Visitors</h3>
                        <p className="text-lg">{total}</p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <FaEye className="text-purple-500 text-2xl mr-4" />
                    <div>
                        <h3 className="text-xl  text-[#000] font-semibold">Online Now</h3>
                        <p className="text-lg">{online}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitorCounter;

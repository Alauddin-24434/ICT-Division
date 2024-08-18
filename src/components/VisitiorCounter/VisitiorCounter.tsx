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
        <div className="visitor-counter p-6 bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Visitor Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <FaCalendarDay className="text-blue-500 text-2xl mr-4" />
                    <div>
                        <h3 className="text-xl font-semibold">Today</h3>
                        <p className="text-lg">{today}</p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <FaCalendarAlt className="text-teal-500 text-2xl mr-4" />
                    <div>
                        <h3 className="text-xl font-semibold">Yesterday</h3>
                        <p className="text-lg">{yesterday}</p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <FaUsers className="text-purple-500 text-2xl mr-4" />
                    <div>
                        <h3 className="text-xl font-semibold">Total Visitors</h3>
                        <p className="text-lg">{total}</p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <FaEye className="text-green-500 text-2xl mr-4" />
                    <div>
                        <h3 className="text-xl font-semibold">Online Now</h3>
                        <p className="text-lg">{online}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitorCounter;

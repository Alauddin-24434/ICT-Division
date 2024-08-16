import React from 'react';

const NoticeboardSection = () => {
    return (
        <section className="bg-gray-200 p-4">
            <h2 className="text-2xl font-bold text-center">Noticeboard</h2>
            <div className="mt-2 overflow-hidden">
                <div className="whitespace-nowrap animate-scroll text-center">
                    Important Notice: Upcoming ICT Event on August 30th, 2024...
                </div>
            </div>
        </section>
    );
};

export default NoticeboardSection;

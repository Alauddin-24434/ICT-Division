import advisor from '/images/HonorableAdviser.jpg';
import secretory from '/images/HonorableSecretory.jpg';

const AdvisorAndSecretarySection = () => {
    const leaders = [
        {
            name: 'Dr. John Doe',
            occupation: 'Honorable Advisor',
            photo: advisor,
        },
        {
            name: 'Ms. Jane Smith',
            occupation: 'Honorable Secretary',
            photo: secretory,
        }
    ];

    return (
        <section className="w-full p-6">
           
            <h1 className="text-center  text-3xl md:text-4xl text-[#6265da] font-bold my-12">Honorable Advisor & Secretary Information</h1>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left side - Cards */}
                <div className="flex-1">
                    <div className="flex flex-col gap-8">
                        {leaders.map((leader, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 max-w-xs w-full mx-auto">
                                <div className="flex items-center justify-center bg-gray-200 p-4">
                                    <img src={leader.photo} alt={leader.name} className="w-24 h-24 object-cover rounded-full border-2 border-purple-600" />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">{leader.name}</h3>
                                    <p className="text-gray-600">{leader.occupation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right side - About Section */}
                <div className="flex-1">
                    <div className=" p-6 rounded-lg ">
                        <h3 className="text-xl font-semibold text-black mb-4">About the Positions</h3>
                        <p className="text-gray-700 mb-4">
                            The roles of the Honorable Advisor and the Honorable Secretary are crucial in guiding the strategic direction and ensuring the effective functioning of our organization. These positions hold significant responsibilities that impact both policy and administrative aspects.
                        </p>
                        <p className="text-gray-700 mb-4">
                            <strong>Honorable Advisor:</strong> This role involves providing high-level strategic advice and guidance to ensure that the organization’s goals and objectives are met. The Advisor is responsible for shaping key policies, fostering relationships with stakeholders, and offering insights on critical decisions that affect the organization's direction and success.
                        </p>
                        <p className="text-gray-700">
                            <strong>Honorable Secretary:</strong> The Secretary plays a pivotal role in the day-to-day operations of the organization. This includes overseeing administrative functions, managing internal processes, and ensuring smooth operational activities. The Secretary also handles communication with various departments and maintains the organizational structure to support effective governance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvisorAndSecretarySection;

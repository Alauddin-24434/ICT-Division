import advisor from '/images/HonorableAdviser.jpg';
import secretory from '/images/HonorableSecretory.jpg';

const AdvisorAndSecretarySection = () => {
    const leaders = [
        {
            name: "Md. Nahid Islam",
            occupation: 'Honorable Advisor',
            photo: advisor,
        },
        {
            name: 'Md. Shamsul Arefin',
            occupation: 'Honorable Secretary',
            photo: secretory,
        }
    ];

    return (
        <section data-aos="fade-up" className="p-6 ">
            <h1 className="my-8 text-center text-xl md:text-2xl text-[#6265da] font-bold">
                Honorable Advisor & Secretary Information
            </h1>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
                {/* Left side - Cards */}
                <div className="flex-1 flex flex-col gap-8">
                    {leaders.map((leader, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
                            <div className="flex items-center justify-center bg-purple-50 p-4">
                                <img
                                    src={leader.photo}
                                    alt={leader.name}
                                    className="w-32 h-32 object-cover rounded-full border-4 border-purple-600"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{leader.name}</h3>
                                <p className="text-gray-600 text-lg">{leader.occupation}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Right side - About Section */}
                <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
                    <p className="text-gray-700 mb-4">
                        <strong className="text-gray-800">Honorable Advisor:</strong> This role involves providing high-level strategic advice and guidance to ensure that the organization’s goals and objectives are met. The Advisor is responsible for shaping key policies, fostering relationships with stakeholders, and offering insights on critical decisions that affect the organization's direction and success.
                    </p>
                    <p className="text-gray-700">
                        <strong className="text-gray-800">Honorable Secretary:</strong> The Secretary plays a pivotal role in the day-to-day operations of the organization. This includes overseeing administrative functions, managing internal processes, and ensuring smooth operational activities. The Secretary also handles communication with various departments and maintains the organizational structure to support effective governance.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AdvisorAndSecretarySection;

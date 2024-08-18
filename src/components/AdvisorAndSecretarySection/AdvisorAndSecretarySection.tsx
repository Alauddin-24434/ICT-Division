
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
        <section  className="p-6 ">
   <h1 className="my-8  sm:my-8 md:my-16 lg:my-16 xl:my-16 2xl:my-16 text-center text-2xl md:text-4xl text-[#6265da] font-bold">
                Honorable Advisor & Secretary Information
            </h1>
            <div data-aos="fade-up"  className="max-w-4xl mx-auto rounded-lg  flex flex-col md:flex-row">
                {/* Left side - Cards */}
                <div className="flex-1 p-6 flex flex-col gap-8">
                    {leaders.map((leader, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            <div className="flex items-center justify-center bg-gray-200 p-4">
                                <img
                                    src={leader.photo}
                                    alt={leader.name}
                                    className="w-24 h-24 object-cover rounded-full border-2 border-purple-600"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">{leader.name}</h3>
                                <p className="text-gray-600">{leader.occupation}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Right side - About Section */}
                <div className="flex-1 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                        <strong>Honorable Advisor:</strong> This role involves providing high-level strategic advice and guidance to ensure that the organization’s goals and objectives are met. The Advisor is responsible for shaping key policies, fostering relationships with stakeholders, and offering insights on critical decisions that affect the organization's direction and success.
                    </p>
                    <p className="text-gray-700">
                        <strong>Honorable Secretary:</strong> The Secretary plays a pivotal role in the day-to-day operations of the organization. This includes overseeing administrative functions, managing internal processes, and ensuring smooth operational activities. The Secretary also handles communication with various departments and maintains the organizational structure to support effective governance.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AdvisorAndSecretarySection;

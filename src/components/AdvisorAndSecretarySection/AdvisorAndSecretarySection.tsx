
import advisor from '/images/Honorable Adviser.jpg';
import secretory from '/images/Honorable Secretory.jpg';
import "./AdvisorAndSecretarySection.css";


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
      <div>
          <div className="p-8 bg-gray-100 w-full">
            <h2 className="text-3xl font-semibold text-center mb-8">Honorable Advisor & Secretary Information</h2>
            <div className="flex gap-8 flex-wrap justify-evenly">
                {leaders.map((leader, index) => (
                    <div key={index} className="card">
                        <div className="avatar-container">
                            <img src={leader.photo} alt={leader.name} className="avatar" />
                        </div>
                        <div className="card-content">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">{leader.name}</h3>
                            <p className="text-gray-600">{leader.occupation}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    
      </div>
    );
};

export default AdvisorAndSecretarySection;

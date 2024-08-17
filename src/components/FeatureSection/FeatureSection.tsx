
import './FeatureSection.css'; // Import the CSS file
import commitment from '/images/categories/commitment.png'
import eService from '/images/categories/e-service.png'
import acts from '/images/categories/acts.jpg'
const features = [
  {
    icon: commitment,
    title: 'About Us',
    description: 'Interface directly with our advanced AI using cutting-edge neural technology.',
    delay: '0s',
  },
  {
    icon: commitment,
    title: 'Notice/Order/Circular',
    description: 'Unbreakable security powered by quantum entanglement protocols.',
    delay: '1s',
  },
  {
    icon: acts,
    title: 'Policies & Publications',
    description: 'Experience fully immersive 3D holographic environments.',
    delay: '2s',
  },
  {
    icon: eService,
    title: 'Citizen e-Services',
    description: 'Microscopic nodes form an intelligent, self-healing network infrastructure.',
    delay: '0.5s',
  },
  {
    icon: commitment,
    title: "Citizen's Charter",
    description: 'Harness the power of stars with our miniaturized fusion reactors.',
    delay: '1.5s',
  },
  {
    icon:commitment,
    title: 'Annual Performance Management',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: commitment,
    title: 'National Integrity Strategy',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: commitment,
    title: 'Grievance Redress System',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: commitment,
    title: 'Right to Information',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: commitment,
    title: 'Innovative Activities',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: commitment,
    title: 'Service Process Simplification',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon:commitment,
    title: 'SDG and Development Plan',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: commitment,
    title: 'Budget & Projects',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: commitment,
    title: 'National ICT Policy 2018',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: commitment,
    title: 'Miscellaneous',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section  data-aos="fade-up" className="bg-animated  py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card rounded-lg p-6 floating"
              style={{ animationDelay: feature.delay }}
            >
              <div className="text-5xl mb-4 text-cyan-400 feature-icon">
               <img src={feature.icon} className='w-8 h-8' alt="" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

import React from 'react';
import './FeatureSection.css'; // Import the CSS file

const features = [
  {
    icon: 'fas fa-brain',
    title: 'About Us',
    description: 'Interface directly with our advanced AI using cutting-edge neural technology.',
    delay: '0s',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Notice/Order/Circular',
    description: 'Unbreakable security powered by quantum entanglement protocols.',
    delay: '1s',
  },
  {
    icon: 'fas fa-vr-cardboard',
    title: 'Policies & Publications',
    description: 'Experience fully immersive 3D holographic environments.',
    delay: '2s',
  },
  {
    icon: 'fas fa-network-wired',
    title: 'Citizen e-Services',
    description: 'Microscopic nodes form an intelligent, self-healing network infrastructure.',
    delay: '0.5s',
  },
  {
    icon: 'fas fa-bolt',
    title: "Citizen's Charter",
    description: 'Harness the power of stars with our miniaturized fusion reactors.',
    delay: '1.5s',
  },
  {
    icon: 'fas fa-dna',
    title: 'Annual Performance Management',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: 'fas fa-dna',
    title: 'National Integrity Strategy',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: 'fas fa-dna',
    title: 'Grievance Redress System',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: 'fas fa-dna',
    title: 'Right to Information',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: 'fas fa-dna',
    title: 'Innovative Activities',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: 'fas fa-dna',
    title: 'Service Process Simplification',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: 'fas fa-dna',
    title: 'SDG and Development Plan',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: 'fas fa-dna',
    title: 'Budget & Projects',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: 'fas fa-dna',
    title: 'National ICT Policy 2018',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
  {
    icon: 'fas fa-dna',
    title: 'Miscellaneous',
    description: 'Augment your physical and mental capabilities with programmable nanobots.',
    delay: '2.5s',
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-animated  py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card rounded-lg p-6 floating"
              style={{ animationDelay: feature.delay }}
            >
              <div className="text-5xl mb-4 text-cyan-400 feature-icon">
                <i className={feature.icon}></i>
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


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faEnvelope, faFileAlt, faCogs, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring'; // Ensure you have react-spring installed
import SectionTitle from '../Shared/SectionTitle/SectionTilte';

const InternalEServiceSection = () => {
    const services = [
        { title: 'Online Application Submission', description: 'Submit your applications online easily.', icon: faLaptopCode },
        { title: 'Internal Communication System', description: 'Manage internal communications and emails.', icon: faEnvelope },
        { title: 'Document Management', description: 'Access and manage important documents.', icon: faFileAlt },
        { title: 'Technical Support', description: 'Get help with technical issues and support.', icon: faCogs },
        { title: 'User Management', description: 'Manage user accounts and permissions.', icon: faUsers },
    ];

    const sectionProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

    return (
        <section data-aos="fade-up" className="p-4">
            <SectionTitle title="Internal E-Service Section"  />
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <animated.div style={sectionProps}>
                        <div className="space-y-4">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-md border-l-4 border-purple-500 p-4 rounded-md flex items-center space-x-4 transition-transform transform hover:translate-x-2 hover:bg-gray-50 cursor-pointer"
                                >
                                    <FontAwesomeIcon
                                        icon={service.icon}
                                        className="text-purple-500 text-xl"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-700">{service.title}</h3>
                                        <p className="text-gray-800">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </animated.div>
                </div>
            </div>
        </section>
    );
};

export default InternalEServiceSection;

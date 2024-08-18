
type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
};

const Card = ({ title, description, imageUrl, link }: CardProps) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <a
                    href={link}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};

const KeyResources = () => {
    // Mock data - replace with your actual data source
    const cardData = [
        {
            title: 'Resource 1',
            description: 'Description for resource 1.',
            imageUrl: 'https://via.placeholder.com/300x200',
            link: '#'
        },
        {
            title: 'Resource 2',
            description: 'Description for resource 2.',
            imageUrl: 'https://via.placeholder.com/300x200',
            link: '#'
        },
        {
            title: 'Resource 3',
            description: 'Description for resource 3.',
            imageUrl: 'https://via.placeholder.com/300x200',
            link: '#'
        }
    ];

    return (
        <section className="p-6 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Key Resources</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            imageUrl={card.imageUrl}
                            link={card.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyResources;

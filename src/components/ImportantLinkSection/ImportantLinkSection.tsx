import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ImportantLinks = () => {
    const links = [
        { label: "President's Office", url: "https://www.president.gov.bd" },
        { label: "Prime Minister's Office", url: "https://www.pmo.gov.bd" },
        { label: "Cabinet Division", url: "https://www.cabinet.gov.bd" },
        { label: "Bangladesh Karmachari Kallyan Board (BKKB)", url: "https://www.bkkb.gov.bd" },
        { label: "National Skills Development Authority", url: "https://www.nsda.gov.bd" },
        { label: "Primary Digital Content", url: "https://www.digitalcontent.gov.bd" },
        { label: "National Portal", url: "https://www.portal.gov.bd" },
    ];

    return (
        <section data-aos="fade-up" className="p-6">
            <div className="container mx-auto">
                <h1 className="mb-8 sm:mb-8 md:mb-16 lg:mb-16 xl:mb-16 2xl:mb-16 text-center text-xl md:text-2xl text-[#6265da] font-bold">Important Links</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hover:text-[#6265da]">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:bg-[#f0f4f8] hover:text-[#6265da]"
                        >
                            <h3 className="text-lg font-semibold text-black flex items-center hover:text-[#6265da]">
                                <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2 hover:text-[#6265da]" />
                                {link.label}
                            </h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImportantLinks;

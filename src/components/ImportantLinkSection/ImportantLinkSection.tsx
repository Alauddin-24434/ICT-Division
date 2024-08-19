import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../Shared/SectionTitle/SectionTilte';

const ImportantLinks = () => {
    const [showAll, setShowAll] = useState(false);

    const links = [
        { label: "President's Office", url: "https://www.president.gov.bd" },
        { label: "Prime Minister's Office", url: "https://www.pmo.gov.bd" },
        { label: "Cabinet Division", url: "https://www.cabinet.gov.bd" },
        { label: "Bangladesh Karmachari Kallyan Board (BKKB)", url: "https://www.bkkb.gov.bd" },
        { label: "National Skills Development Authority", url: "https://www.nsda.gov.bd" },
        { label: "Primary Digital Content", url: "https://www.digitalcontent.gov.bd" },
        { label: "National Portal", url: "https://www.portal.gov.bd" },
    ];

    const visibleLinks = showAll ? links : links.slice(0, 6);

    return (
        <section data-aos="fade-up" className="p-4 ">
            <SectionTitle title="Important Links" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hover:text-purple-500">
                {visibleLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:bg-[#f0f4f8] hover:text-purple-500"
                    >
                        <h3 className="text-sm text-gray-700 flex items-center hover:text-purple-500">
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2 text-purple-500" />
                            {link.label}
                        </h3>
                    </a>
                ))}
            </div>
            <div className="mt-4 block sm:block md:absolute lg:absolute  xl:absolute 2xl:absolute z-50 top-12 right-4 text-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-sm text-purple-500 hover:text-purple-700 border border-purple-500 hover:bg-purple-100 py-2 px-4 rounded"
                >
                    {showAll ? "View Less" : "View All"}
                </button>
            </div>
        </section>
    );
};

export default ImportantLinks;

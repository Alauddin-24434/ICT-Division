import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faComputer,
  faBook,
  faMobileAlt,
  faHome,

} from "@fortawesome/free-solid-svg-icons";

const KeyResources = ({ showAll }:any) => {
  const cardData = [
    { title: "Office Attachment Application Form", icon: faFileAlt },
    {
      title: "Information and Communication Technology technology ranks first",
      icon: faComputer,
    },
    { title: "Bangladesh E-Directory", icon: faBook },
    { title: "Digital Services of this Services", icon: faMobileAlt },
    { title: "Government Services In one Address", icon: faHome },
   
  ];

  const visibleCards = showAll ? cardData : cardData.slice(0, 2);

  return (
    <div className="flex-1">
      <div className="w-full mx-auto">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4"
        >
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className="cursor-pointer shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full bg-white"
            >
              <div className="p-4 flex items-center">
                <FontAwesomeIcon
                  icon={card.icon}
                  className="text-purple-500 mr-4 text-xl"
                />
                <h3 className="text-sm mb-2 text-gray-800">
                  {card.title.length > 24
                    ? `${card.title.slice(0, 24)}...`
                    : card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyResources;

import { useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTilte";
import KeyResources from "./KeyResources";
import NoticeBoard from "./NoticeBoard";

const NoticeboardSEction = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section data-aos="fade-up" className="relative p-4">
      <SectionTitle title="Noticeboard & Important Resources" />
     <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-4">
     <NoticeBoard showAll={showAll} setShowAll={setShowAll} />
     <KeyResources showAll={showAll} />
     <div className="block sm:block md:absolute lg:absolute  xl:absolute 2xl:absolute z-50 top-16 right-4 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-purple-500 hover:text-purple-700 border border-purple-500 hover:bg-purple-100 py-2 px-4 rounded"
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>
     </div>
    </section>
  );
};

export default NoticeboardSEction;

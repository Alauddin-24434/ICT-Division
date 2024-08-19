import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faUserTie } from '@fortawesome/free-solid-svg-icons';

import SectionTitle from '../Shared/SectionTitle/SectionTilte';
import advisor from '/images/HonorableAdviser.jpg';
import secretory from '/images/HonorableSecretory.jpg';

const AdvisorAndSecretarySection = () => {
    return (
        <section data-aos="fade-up" className="p-4">
            <div className="py-16">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="mb-12 space-y-2 text-center">
                        <SectionTitle title="Honorable Advisor & Secretary Information" />
                    </div>

                    <div className="grid gap-12 lg:grid-cols-2">
                        <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img
                                src={advisor}
                                alt="Honorable Advisor"
                                loading="lazy"
                                width="1000"
                                height="667"
                                className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
                            />
                            <div className="sm:w-7/12 pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faChalkboardTeacher} className="text-gray-800 mr-2 text-2xl" />
                                            <h4 className="text-2xl font-semibold text-gray-800">Md. Nahid Islam</h4>
                                        </div>
                                        <p className="text-gray-600">Honorable Advisor</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img
                                src={secretory}
                                alt="Honorable Secretary"
                                loading="lazy"
                                width="1000"
                                height="667"
                                className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
                            />
                            <div className="sm:w-7/12 pl-0 p-5 ">
                                <div className="space-y-2">
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faUserTie} className="text-gray-800 mr-2 text-2xl" />
                                            <h4 className="text-2xl font-semibold text-gray-800">Md. Shamsul Arefin</h4>
                                        </div>
                                        <p className="text-gray-800">Honorable Secretary</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvisorAndSecretarySection;

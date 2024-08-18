import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaBars } from "react-icons/fa";
import Container from "../../Container/Container";
import { useState } from "react";
import { menuItems } from "./navMenuItems";



const Navbar = () => {
 

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(
    null
  );

  const toggleDropdown = (id: string | undefined) => {
    if (id) {
      setActiveDropdown((prevId) => (prevId === id ? null : id));
      setActiveSubDropdown(null);
    }
  };

  const toggleSubDropdown = (title: string | undefined) => {
    if (title) {
      setActiveSubDropdown((prevTitle) => (prevTitle === title ? null : title));
    }
  };

  return (
   <nav className="border py-4 lg:bg-transparent bg-slate-300 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4">
      <Container>
      <div className="flex w-full flex-wrap items-center justify-between">
          {/* Social Media Icons */}
          <div className="flex justify-end items-center p-2 space-x-4 text-gray-600">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>

          {/* Hamburger Button for Mobile View */}
          <button
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            aria-controls="navbarSupportedContent8"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              const element = document.getElementById(
                "navbarSupportedContent8"
              );
              if (element) {
                element.classList.toggle("hidden");
              }
            }}
          >
            <FaBars size={24} />
          </button>

          {/* Collapsible Navbar Container */}
          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent8"
          >
            {/* Navigation Links */}
            <ul className="list-style-none flex flex-col ps-0 lg:mt-1 lg:flex-row">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2 relative"
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        aria-expanded={activeDropdown === item.id}
                        className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2 flex items-center"
                      >
                        {item.label}
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        id={item.id}
                        className={`${
                          activeDropdown === item.id ? "flex :" : "hidden"
                        } absolute z-50 mt-2 w-64   rounded-lg p-4 justify-center items-center 
                        }`}
                      >
                        {item.id === "aboutDropdown" ||
                        item.id === "projectProgrammeDropdown" ||
                        item.id === "ContactAndComment" ? (
                          <div className="flex flex-col bg-white">
                            {item.columns?.map((column) => (
                              <ul key={column.title} className="text-center">
                                {column.title && (
                                  <li>
                                    <button
                                      onClick={() =>
                                        toggleSubDropdown(column.title)
                                      }
                                      className="block w-64  text-center px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800"
                                    >
                                      {column.title}
                                    </button>
                                    <hr />
                                  </li>
                                 
                                )}
                                {column.subDropdown &&
                                  activeSubDropdown === column.title &&
                                  column.links.map((link) => (
                                    <li key={link.path}>
                                      <Link
                                        to={link.path}
                                        className="block text-center px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800"
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            ))}
                          </div>
                        ) : (
                          <ul>
                            {item.columns?.[0]?.links.map((link) => (
                              <li key={link.path}>
                                <Link
                                  to={link.path}
                                  className="block w-64 text-center px-8 py-2 text-sm text-neutral-700 bg-white hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800"
                                >
                                  {link.label}
                                </Link>
                                <hr />
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path || "/"}
                      className="text-black dark:text-white lg:px-2"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Search Bar */}
          <div className="mt-2 lg:mt-0 lg:block hidden">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border p-2 rounded-md w-full lg:w-auto"
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
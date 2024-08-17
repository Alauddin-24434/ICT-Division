type LinkItem = {
  label: string;
  path: string;
};

type DropdownColumn = {
  title?: string;
  subDropdown?: boolean;
  links: LinkItem[];
};

type MenuItem = {
  label: string;
  path?: string;
  dropdown?: boolean;
  id?: string;
  columns?: DropdownColumn[];
};

const menuItems: MenuItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About Us',
    dropdown: true,
    id: 'aboutDropdown',
    columns: [
      {
        title: 'About Division',
        subDropdown: true,
        links: [
          { label: 'History & Activities', path: '/history-activities' },
          { label: 'Vision & Mission', path: '/vision-mission' },
          { label: 'Honorable Adviser', path: '/honorable-adviser' },
        ],
      },
      {
        title: 'Manpower',
        subDropdown: true,
        links: [
          { label: 'Officers', path: '/officers' },
          { label: 'Work Distribution', path: '/work-distribution' },
          { label: 'Information Officer', path: '/information-officer' },
          { label: 'GRS and Appellate Officer', path: '/grs-appellate-officer' },
          { label: 'Focal Point Officers', path: '/focal-point-officers' },
        ],
      },
      {
        title: 'Services of Divisions',
        subDropdown: true,
        links: [
          { label: 'Citizen Charter', path: '/citizen-charter' },
          { label: 'List of Citizen e-Services', path: '/e-services' },
        ],
      },
      {
        title: 'Committees of Ministry/Division',
        subDropdown: true,
        links: [
          { label: 'Committees chaired by Honorable PM & Minister', path: '/committees-pm-minister' },
          { label: 'Regarding Ministry/Division', path: '/regarding-ministry' },
        ],
      },
    ],
  },
  {
    label: 'Affiliated Offices/Institutions',
    dropdown: true,
    id: 'affiliatedOfficesDropdown',
    columns: [
      {
        links: [
          { label: 'List of Offices/Institutions', path: '/offices-institutions' },
        ],
      },
    ],
  },
  {
    label: 'Acts/Policy',
    dropdown: true,
    id: 'ActsPolicyDropdown',
    columns: [
      {
        links: [
          { label: 'Acts', path: '/acts' },
          { label: 'Policy', path: '/policy' },
          { label: 'Guidelines and Strategies', path: '/guidelines-strategies' },
          { label: 'Draft Acts, Rules and Policy', path: '/draft-acts-rules-policy' },
        ],
      },
    ],
  },
  {
    label: 'Gallery',
    dropdown: true,
    id: 'GalleryDropdown',
    columns: [
      {
        links: [
          { label: 'Photo Gallery', path: '/photo-gallery' },
          { label: 'Video Gallery', path: '/video-gallery' },
        ],
      },
    ],
  },
  {
    label: 'Project/Programme',
    dropdown: true,
    id: 'projectProgrammeDropdown',
    columns: [
      {
        title: 'Project',
        subDropdown: true,
        links: [
          { label: 'Ongoing Projects', path: '/ongoing-projects' },
          { label: 'Procurement Plan', path: '/procurement-plan' },
          { label: 'Completed Projects', path: '/completed-projects' },
        ],
      },
      {
        title: 'Programme',
        subDropdown: true,
        links: [
          { label: 'Completed', path: '/completed-programmes' },
          { label: 'Programme', path: '/programmes' },
        ],
      },
    ],
  },
];

import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Container from '../../Container/Container';
import { useState } from 'react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  const toggleDropdown = (id: string | undefined) => {
    if (id) {
      setActiveDropdown(prevId => prevId === id ? null : id);
      setActiveSubDropdown(null); // Close all sub-dropdowns when switching main dropdowns
    }
  };

  const toggleSubDropdown = (title: string | undefined) => {
    if (title) {
      setActiveSubDropdown(prevTitle => prevTitle === title ? null : title);
    }
  };

  return (
    <nav className="border py-4 bg-transparent shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4">
      <Container>
        <div className="flex w-full flex-wrap items-center justify-between">
          {/* Social Media Icons */}
          <div className="flex justify-end items-center p-2 space-x-4 text-gray-600">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-700" />
            </a>
          </div>

          {/* Hamburger Button for Mobile View */}
          <button
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            aria-controls="navbarSupportedContent8"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              const element = document.getElementById('navbarSupportedContent8');
              if (element) {
                element.classList.toggle('hidden');
              }
            }}
          >
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* Collapsible Navbar Container */}
          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent8"
          >
            {/* Navigation Links */}
            <ul className="list-style-none flex flex-col ps-0 lg:mt-1 lg:flex-row">
              {menuItems.map((item) => (
                <li key={item.label} className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2 relative">
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
                          activeDropdown === item.id ? 'block' : 'hidden'
                        } absolute ${item.id === 'aboutDropdown'  ? 'left-1/2 transform -translate-x-1/2' : 'left-0'} z-50 mt-2 ${
                          item.id === 'aboutDropdown' ? 'w-full lg:w-auto' : 'w-64'
                        } bg-white shadow-lg border rounded-lg ${
                          item.id === 'aboutDropdown' ? 'lg:min-w-[800px]' : ''
                        } p-4`}
                      >
                        {item.id === 'aboutDropdown' || 'projectProgrammeDropdown'  ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {item.columns.map((column) => (
                              <ul key={column.title} className="text-center">
                                {column.title && (
                                  <li>
                                    <button
                                      onClick={() => toggleSubDropdown(column.title)}
                                      className="block w-full text-center px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800"
                                    >
                                      {column.title}
                                    </button>
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
                            {item.columns[0].links.map((link) => (
                              <li key={link.path}>
                                <Link
                                  to={link.path}
                                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </>
                  ) : (
                    <Link to={item.path} className="text-black dark:text-white lg:px-2">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Search Bar */}
          <div className="mt-2 lg:mt-0">
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

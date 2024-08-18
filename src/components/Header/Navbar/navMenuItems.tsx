// Type Definitions
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
export const menuItems: MenuItem[] = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      dropdown: true,
      id: "aboutDropdown",
      columns: [
        {
          title: "About Division",
          subDropdown: true,
          links: [
            { label: "History & Activities", path: "/history-activities" },
            { label: "Vision & Mission", path: "/vision-mission" },
            { label: "Honorable Adviser", path: "/honorable-adviser" },
          ],
        },
        {
          title: "Manpower",
          subDropdown: true,
          links: [
            { label: "Officers", path: "/officers" },
            { label: "Work Distribution", path: "/work-distribution" },
            { label: "Information Officer", path: "/information-officer" },
            {
              label: "GRS and Appellate Officer",
              path: "/grs-appellate-officer",
            },
            { label: "Focal Point Officers", path: "/focal-point-officers" },
          ],
        },
        {
          title: "Services of Divisions",
          subDropdown: true,
          links: [
            { label: "Citizen Charter", path: "/citizen-charter" },
            { label: "List of Citizen e-Services", path: "/e-services" },
          ],
        },
        {
          title: "Committees of Ministry/Division",
          subDropdown: true,
          links: [
            {
              label: "Committees chaired by Honorable PM & Minister",
              path: "/committees-pm-minister",
            },
            {
              label: "Regarding Ministry/Division",
              path: "/regarding-ministry",
            },
          ],
        },
      ],
    },
    {
      label: "Affiliated Offices/Institutions",
      dropdown: true,
      id: "affiliatedOfficesDropdown",
      columns: [
        {
          links: [
            {
              label: "List of Offices/Institutions",
              path: "/offices-institutions",
            },
          ],
        },
      ],
    },
    {
      label: "Acts/Policy",
      dropdown: true,
      id: "ActsPolicyDropdown",
      columns: [
        {
          links: [
            { label: "Acts", path: "/acts" },
            { label: "Policy", path: "/policy" },
            {
              label: "Guidelines and Strategies",
              path: "/guidelines-strategies",
            },
            {
              label: "Draft Acts, Rules and Policy",
              path: "/draft-acts-rules-policy",
            },
          ],
        },
      ],
    },
    {
      label: "Gallery",
      dropdown: true,
      id: "GalleryDropdown",
      columns: [
        {
          links: [
            { label: "Photo Gallery", path: "/photo-gallery" },
            { label: "Video Gallery", path: "/video-gallery" },
          ],
        },
      ],
    },
    {
      label: "Project/Programme",
      dropdown: true,
      id: "projectProgrammeDropdown",
      columns: [
        {
          title: "Project",
          subDropdown: true,
          links: [
            { label: "Ongoing Projects", path: "/ongoing-projects" },
            { label: "Procurement Plan", path: "/procurement-plan" },
            { label: "Completed Projects", path: "/completed-projects" },
          ],
        },
        {
          title: "Programme",
          subDropdown: true,
          links: [
            { label: "Completed", path: "/completed-programmes" },
            { label: "Programme", path: "/programmes" },
          ],
        },
      ],
    },
    {
      label: "E-Services",
      dropdown: true,
      id: "eServices",
      columns: [
        {
          links: [
            {
              label: 'Innovation Information System Management System',
              path: '/innovation-information-system-management-system',
            },
            {
              label: "Casual Leave Management",
              path: "/casual-leave-management",
            },
            { label: "Smart Dashboard", path: "/smart-dashboard" },
            {
              label: "Get Your Freelancer ID",
              path: "/get-your-freelancer-id",
            },
            {
              label: "Fellowship & Innovation Fund Application",
              path: "/fellowship-innovation-fund-application",
            },
            { label: "e-Nothi", path: "/e-nothi" },
            { label: "Web mail", path: "/web-mail" },
            {
              label: "Online Salary Submission",
              path: "/online-salary-submission",
            },
            { label: "e-Tendering(e-GP)", path: "/e-tendering-e-gp" },
            { label: "Mygov", path: "/mygov" },
            { label: "GRP", path: "/grp" },
            {
              label: "Project Monitoring System",
              path: "/project-monitoring-system",
            },
            { label: "Online ACR", path: "/online-acr" },
            { label: "Online Recruitment", path: "/online-recruitment" },
            { label: "EMPORIA", path: "/emporia" },
          ],
        },
      ],
    },
    {
      label: "Contact & Comment",
      dropdown: true,
      id: "ContactAndComment",
      columns: [
        {
          title: "Contact",
          subDropdown: true,
          links: [
            { label: "Office Address", path: "/office-address" },
          

          ],
        },
        {
          title: "Comment",
          subDropdown: true,
          links: [
            { label: "Your Question & Comment", path: "/your-question-comment" },
           
        


          ],
        },
      ],
    },
  ];
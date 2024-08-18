import React from 'react';

// Define the placeholder image URL
const placeholderImageUrl = "https://via.placeholder.com/256";

interface FeatureCardProps {
  title: string;
  links?: string[]; // List of links for the "About Us" section
  imgUrl?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, links, imgUrl }) => {
  return (
    <div className="mt-8 py-4 px-4 rounded-lg bg-[#fff] transform hover:scale-105 transition duration-500 mx-auto sm:mx-0 max-w-xs">
    <div className="w-full">
      <img className="w-full rounded-t-xl" src={imgUrl || placeholderImageUrl} alt={title} />
      <div className="mt-4 text-green-600 text-center">
        <h1 className="text-sm text-[#951aa1] font-bold">{title}</h1>
        {links && (
          <ul className="mt-4 text-gray-600 space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <a href="#" className="text-xs hover:underline">{link.slice(0,20)}...</a>
              </li>
            ))}
          </ul>
        )}
        {!links && (
          <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
        )}
      </div>
    </div>
  </div>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    { 
      title: 'About Us', 
      imgUrl: 'https://i.ibb.co/cCRQLXq/online-meetup-abstract-concept-vector-illustration-conference-call-join-meetup-group-video-call-onli.jpg',
      links: [
        'Vision & Mission',
        'Organogram',
        'Officers/Staff',
        'Work Distribution'
      ]
    },
    { 
      title: 'Notice/Order/Circular', 
      imgUrl: 'https://i.ibb.co/b7vp3W4/resume-writing-service-abstract-concept-illustration-copywriting-service-cv-online-professional-help.jpg',
      links: [
        'Notification/Circular',
        'Office orders/Government Orders (GO)/No Objection Certificate (NOC)',
        'News Notifications',
        'Tender/Recruitment Notice'
      ]
    },
    { 
      title: 'Policies & Publications', 
      imgUrl: 'https://i.ibb.co/8NQPdt2/face-recognition-personal-identification-secure-access-profile-entry-data-storage-opening-female-acc.jpg',
      links: [
        'Policy',
        'Laws & Regulations/Guidelines & Strategies',
        'Publications & Annual Report',
        'Others Report'
      ]
    },
    { 
      title: 'Citizen e-Services', 
      imgUrl: 'https://i.ibb.co/8zQgbRz/job-interview-process-hiring-new-employees-hr-specialist-cartoon-character-talking-new-candidatee-re.jpg',
      links: [
        'Donation in ICT Innovation',
        'Fellowship & Scholarship',
        'Hi-Tech Park One Stop Service',
        'Other e-Service'
      ]
    },
    { 
      title: 'Citizen\'s Charter', 
      imgUrl: 'https://i.ibb.co/0MhHp8S/sales-contract-term-flat-style-illustration-design-free-vector-1.jpg',
      links: [
        'Citizen\'s Charter',
        'Focal Point/Monitoring Committee',
        'Work Plan, Monitoring & Evaluation Report',
        'Laws/Regulations/Policies/Notifications/Circulars/Guidelines'
      ]
    },
    { 
      title: 'Annual Performance Management', 
      imgUrl: 'https://i.ibb.co/qRfTkJ5/depositphotos-397881128-stock-illustration-sales-representative-abstract-concept-vector.webp',
      links: [
        'Guidelines/Circulars/APA Team/Focal Point',
        'Annual Performance Agreement & Result',
        'Monitoring and evaluation report',
        'APAMS software link'
      ]
    },
    { 
      title: 'National Integrity Strategy', 
      imgUrl: 'https://i.ibb.co/vxc6mD2/business-development-market-development-business-expansion-advertisement-marketing-infographic-stati.jpg',
      links: [
        'Best Practice Work Plan Web Link',
        'Integrity Strategy Committee & Focal point',
        'Monitoring/Evaluation Report',
        'Laws/Regulations/Policies/Notifications/Circulars/Guidelines/Workplan'
      ]
    },
    { 
      title: 'Grievance Redress System', 
      imgUrl: 'https://i.ibb.co/DRrPrFz/call-centre-hotline-client-support-online-helpline-problem-solving-remote-assistance-telephone-servi.jpg',
      links: [
        'GRS and Appellate Officers',
        'Work Plan, Monitoring & Evaluation Report',
        'Grievance Submission (Online)',
        'Laws/Regulations/Notifications/Policies/Circulars/Guidelines'
      ]
    },
    { 
      title: 'Right to Information', 
      imgUrl: 'https://i.ibb.co/TM1BxWt/smart-spaces-abstract-concept-illustration-spaced-learning-school-ai-education-learning-management-s.jpg',
      links: [
        'Designated Officer & Appellate Authority',
        'Application and appeal forms',
        'Self Expressible Information/Progress Report',
        'Laws/Rules/Workplan/Reports/Policies/Circulars/Guidelines/Notifications'
      ]
    },
    { 
      title: 'Innovative Activities', 
      imgUrl: 'https://i.ibb.co/2WYpz8T/startup-rocket-launch-project-start-setting-business-company-founding-teamwork-cooperation-partnersh.jpg',
      links: [
        'Innovation Team',
        'Innovation Idea',
        'Innovation Work Plan/Publication',
        'Piloting Project'
      ]
    },
    { 
      title: 'Service Process Simplification', 
      imgUrl: 'https://i.ibb.co/dGnRHVM/internet-forum-abstract-concept-illustration-335657-3679.jpg',
      links: [
        'Notification/Circular/Policy/publication',
        'Digital Service',
        'SPS Example',
        'List of simplified services'
      ]
    },
    { 
      title: 'SDG and Development Plan', 
      imgUrl: 'https://i.ibb.co/HDv7Zhk/ebooks-collection-library-archive-e-reading-literature-male-cartoon-character-loading-books-ereader.jpg',
      links: [
        'Ministry/Divisions’ SDG',
        'SDG Focal/Alternative Focal Point',
        'SDG National Document',
        '5th Year Plan & Report'
      ]
    },
    { 
      title: 'Budget & Projects', 
      imgUrl: 'https://i.ibb.co/bs12M4s/creative-collaboration-program-development-successful-cooperation-coworking-brainstorm-effective-tea.jpg',
      links: [
        'Annual Procurement Plan',
        'Budget & MTBF Budget',
        'Budget Reports/Office Orders',
        'Important Implemented Projects'
      ]
    },
    { 
      title: 'National ICT Policy 2018', 
      imgUrl: 'https://i.ibb.co/8NQPdt2/face-recognition-personal-identification-secure-access-profile-entry-data-storage-opening-female-acc.jpg',
      links: [
        'Ministry/Division Wise Work Plan',
        'Office Order/Notification',
        'Focal Point'
      ]
    },
    { 
      title: 'Miscellaneous', 
      imgUrl: 'https://i.ibb.co/vxc6mD2/business-development-market-development-business-expansion-advertisement-marketing-infographic-stati.jpg',
      links: [
        'Different Forms',
        'Best Practice',
        'ICT Related Award',
        'Different Committee'
      ]
    }
  ];
  

  return (
   
<section data-aos="fade-up" className=" relative overflow-hidden">
      <div className="container mx-auto ">
      
        <h1 className="mt-8 text-center text-3xl md:text-4xl text-[#6265da] font-bold">Our Features & Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              imgUrl={feature.imgUrl}
              links={feature.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "SDE-I",
    company: "Mitt Arv Technologies",
    certificateLink:"https://drive.google.com/file/d/1NH4nZwH0UO7h_JEjeZYPWNDkDCBgADhl/view?usp=sharing",
    companyWebSite: "https://www.mittarv.com/",
    startDate: "June 2024",
    isCurrentJob: true,
    location: "Hyderabad, India",
    description: [
      "Led the complete developement of the Asset Vault across Andriod, iOS & Web housing over 17 asset types and 30+ subtypes, with backend RESTAPI and their Integration in frontend while using effective state management for enhanced UX.",
      "Implemented an efficient hotfix process for production bug fixes, expediting their deployment to regions while ensuring swift movement across regions without unnecessary commits or tickets.",
      "Engineered efficient data analytics solutions using Azure Data Factory and Databricks, optimizing costs and ensuring secure data flow across regional subscriptions",
      "Continuously monitored Azure Application Insights via the Azure portal for service issues while conducting ongoing infrastructure monitoring and cost analysis to optimize resources.",
      "Actively contributed to bug fixes and process enhancements, accelerating familiarity with the codebase.",
      "Facilitating architectural design reviews, leveraging NodeJS, ReactJS, and Azure technologies to deliver scalable solutions aligned with Mitt Arv's strategic goals."
   ],
  },
  {
    designation: "Software Development Intern",
    company: "Mitt Arv Technologies",
    certificateLink:"https://drive.google.com/file/d/1NH4nZwH0UO7h_JEjeZYPWNDkDCBgADhl/view?usp=sharing",
    companyWebSite: "https://www.mittarv.com/",
    startDate: "Dec 2022",
    endDate: "June 2024",
    isCurrentJob: false,
    location: "Hyderabad, India",
    description: [
       "Led the complete developement of the Asset Vault across Andriod, iOS & Web housing over 17 asset types and 30+ subtypes, with backend RESTAPI and their Integration in frontend while using effective state management for enhanced UX.",
       "Implemented an efficient hotfix process for production bug fixes, expediting their deployment to regions while ensuring swift movement across regions without unnecessary commits or tickets.",
       "Engineered efficient data analytics solutions using Azure Data Factory and Databricks, optimizing costs and ensuring secure data flow across regional subscriptions",
       "Continuously monitored Azure Application Insights via the Azure portal for service issues while conducting ongoing infrastructure monitoring and cost analysis to optimize resources.",
       "Actively contributed to bug fixes and process enhancements, accelerating familiarity with the codebase.",
       "Facilitating architectural design reviews, leveraging NodeJS, ReactJS, and Azure technologies to deliver scalable solutions aligned with Mitt Arv's strategic goals."
    ],
  },
  {
    designation: "Student Software Developer",
    company: "Sinhgad Academy Of Engineering",
    certificateLink : "https://drive.google.com/file/d/1HBBv_LX6E2Oa6_-Zw-_BxkxhZNDY2mA9/view?usp=sharing",
    startDate: "Mar 2024",
    endDate: "June 2023",
    isCurrentJob: false,
    location: "Onsite",
    description: [
      "During this period the developement of the project started. ",
      "Built using Flutter for the frontend and Node.js for the backend.",
      "Evaluated key backend performance for creating random shares and XOR operations, leading to the selection of Node.js.",
      "Developed a RESTful API and modular backend architecture, utilizing MySQL as the database server.",
      "Implemented AES-CCBC-256 encryption for securing user data.",
      "Conducted further research on applying visual cryptography to colorful images."
    ],
  },
  {
    designation: "Researcher",
    company: "Sinhgad Academy Of Engineering",
    certificateLink : "https://drive.google.com/file/d/19gJegeJ7vQW8yu2xcQDDGT_hzc92Sovn/view?usp=sharing",
    startDate: "June 2023",
    endDate: "Jan 2023",
    isCurrentJob: false,
    location: "Onsite",
    description: [
      "Developed a novel method to enhance the security of One-Time Passwords (OTPs) by integrating visual cryptography.",
      "Utilized random image selection and intricate modification techniques, including blurring, to generate encoded OTPs.",
      "Designed a sophisticated security framework that involves splitting modified images into two parts, which reconstruct the original OTP when combined.",
      "Worked closely with a talented team of four to bring this multifaceted project to fruition, contributing to robust data authentication mechanisms.",
      "Our research introduces a new layer of security in digital communication, fostering trust and dependability in data transmission."
    ],
  },
];

export default experiences;

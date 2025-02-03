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
      "Spearheaded the migration of analytics workflows to Azure Data Factory and Databricks, enhancing data retrieval efficiency by 50%, which improved overall reporting precision for the analytics team.",
      "Implemented CI/CD pipelines to streamline the deployment of Azure Data Factory artifacts across multiple regions, reducing deployment time by 90% and accelerating release cycles while minimizing manual intervention.",
      "Enhanced app performance by introducing local caching with Hive, boosting user engagement by 30% through faster access to frequently used data.",
      "Architected the Asset Vault Tool utilizing Node.js and Sequelize, introducing a two-level approval workflow that fortified security and streamlined internal tool operations.",
      "Streamlined asset form management, reducing manual efforts by 40% and significantly cutting down time-to-market for new forms.",
      "Resolved state management challenges in React.js by leveraging Redux, improving user experience and increasing retention",
      "Implemented AES encryption standards to ensure secure data transmission between frontend and backend, aligning with ISO-27001 compliance.",
      "Integrated SendGrid API in collaboration with the MoEngage team to optimize email delivery speed and reliability.",
    ]
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
      "Contributed as a Founding Engineer in the development of an early-stage application, playing a key role in shaping its architecture and features.",
      "Implemented RESTful APIs in Node.js with comprehensive error handling and MySQL transactions, resulting in a 30% reduction in data-related issues and improving system reliability.",
      "Led debugging efforts by aligning technical fixes with business requirements, enhancing system stability.",
      "Led backend integration and state management for the Asset Vault tool in Flutter, using Bloc for centralized state management, which contributed to a more scalable architecture",
      "Integrated Firebase Analytics across all user-facing apps, enabling the product team to gather actionable insights on user behavior",
      "Implemented a Feature Flags system that cut rollout time for new features by 20%, allowing controlled access to features for better product testing.",
      "Secured Azure Blob storage by introducing Shared Access Token (SAS) token authentication, ensuring privacy and data integrity.",
      "Established a Backend Migration process to enforce consistent model and production-level changes, ensuring smoother deployments with migration files."
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

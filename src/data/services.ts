import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Mobile App Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/dart.svg",
      "/skills/flutter.svg",
      "/skills/getx.png",
      "/skills/firebase.svg",
    ],
    shortDescription:
      "I create engaging mobile applications for your audience.",
    description:
      "I create captivating mobile apps from concept to deployment for iOS and Android. Using cutting-edge technologies, I ensure seamless performance, intuitive interfaces, and robust functionality that align with your business goals. Enjoy a flawless user experience and outstanding results.",
  },
  {
    id: 2,
    title: "Web Development",
    icons: [
      "/skills/redux.svg",
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription: "I build visually stunning and user-friendly websites.",
    description:
      "I deliver stunning, user-friendly websites to establish your online presence. From simple sites to complex e-commerce platforms, I provide tailored solutions using the latest frameworks and technologies for a seamless, responsive, and SEO-friendly browsing experience. Enhance your online identity with quality.",
  },
  {
    id: 3,
    title: "Backend Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/docker.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/aws.svg",
    ],
    shortDescription: "I create robust and scalable backend infrastructures.",
    description:
      "I enhance digital applications with robust, scalable backend infrastructures. I develop efficient database structures, APIs, and configure servers for optimal performance, security, and scalability, ensuring your applications handle high traffic and complex data management seamlessly. Rely on strong backend solutions.",
  },
  {
    "id": 4,
    "title": "Azure Development",
    "icons": [
      "/skills/data-Factories.svg",
      "/skills/azure-app-service.svg",
      "/skills/azure-main.png",
      "/skills/azure-blob-storage.svg",
      "/skills/azure-DevOps.svg"
    ],
    "shortDescription": "I build scalable and efficient cloud solutions on Azure.",
    "description": 
      "I specialize in creating robust cloud solutions using Azure's powerful suite of services. From automating data pipelines with Azure Data Factory, deploying scalable web apps with Azure App Service, to processing big data with Azure Databricks, I design end-to-end solutions. Additionally, I optimize storage with Azure Blob Storage and enhance application performance through Redis Caching. My focus is on delivering reliable, scalable, and high-performance cloud-based solutions."
  },
  // {
  //   id: 5,
  //   title: "DevOps",
  //   icons: [
  //     "/skills/docker.svg",
  //     "/skills/kubernetes.svg",
  //     "/skills/aws.svg",
  //     "/skills/jenkins.svg",
  //     "/skills/terraform.svg",
  //   ],
  //   shortDescription: "I streamline development and operations processes.",
  //   description:
  //     "I streamline development and operations processes through effective DevOps practices. I implement continuous integration and deployment pipelines, manage cloud infrastructure, and use containerization to ensure efficient, reliable, and scalable software delivery. Improve your workflow with DevOps solutions.",
  // },
  // {
  //   id: 6,
  //   title: "Database Management",
  //   icons: [
  //     "/skills/mysql.svg",
  //     "/skills/postgresql.svg",
  //     "/skills/mongodb.svg",
  //     "/skills/redis.svg",
  //     "/skills/sqlite.svg",
  //   ],
  //   shortDescription: "I manage and optimize your database systems.",
  //   description:
  //     "I manage and optimize your database systems for performance, reliability, and scalability. With expertise in SQL and NoSQL databases, I design schemas, write complex queries, and implement best practices for data integrity and security. Ensure your data is managed effectively and efficiently.",
  // },
];

export default services;

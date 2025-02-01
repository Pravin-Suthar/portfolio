import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
      {
        title: "Dart",
        level: SkillLevel.Expert,
        icon: "/skills/dart.svg",
      },
      {
        title: "C++",
        level: SkillLevel.Expert,
        icon: "/skills/cpp.png",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
      {
        title: "SASS",
        level: SkillLevel.Intermediate,
        icon: "/skills/sass.svg",
      },
      {
        title: "Redux Toolkit",
        level: SkillLevel.Expert,
        icon: "/skills/redux.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Express.js",
        level: SkillLevel.Expert,
        icon: "/skills/express.svg",
      },
      {
        title: "Socket.io",
        level: SkillLevel.Intermediate,
        icon: "/skills/socket-io.png",
      },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      {
        title: "Flutter",
        level: SkillLevel.Expert,
        icon: "/skills/flutter.svg",
      },
      {
        title: "GetX",
        level: SkillLevel.Expert,
        icon: "/skills/getx.png",
      },
      {
        title: "React Native",
        level: SkillLevel.Beginner,
        icon: "/skills/react-native.svg",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Beginner,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  {
    title: "DevOps/Azure",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Beginner,
        icon: "/skills/docker.png",
      },
      {
        title: "Azure",
        level: SkillLevel.Intermediate,
        icon: "/skills/azure-main.png",
      },
      {
        title: "Azure Data Factory",
        level: SkillLevel.Expert,
        icon: "/skills/data-Factories.svg",
      },
      {
        title: "Azure Storage Blobs",
        level: SkillLevel.Expert,
        icon: "/skills/azure-blob-storage.svg",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        title: "Firebase",
        level: SkillLevel.Intermediate,
        icon: "/skills/firebase.svg",
      },
      {
        title: "Ubuntu",
        level: SkillLevel.Intermediate,
        icon: "/skills/ubuntu.png",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;

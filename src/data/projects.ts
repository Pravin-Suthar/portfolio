import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "Visual-Cryptographys-based-login",
    title: "Visual Cryptographys based login",
    description:
      "Secure authentication system using visual cryptography for login verification. ",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Pravin-Suthar/Visual-Cryptographys-based-login",
    url: "https://github.com/Pravin-Suthar/Visual-Cryptographys-based-login/releases",
    tags: ["Flutter", "Dart", "GetX", "Authentication"],
  },
  {
    id: "AI-Powered Job Prep Site",
    title: "</> job-prep>",
    description:
      "One stop solution to prepare for the interviews create cover letter/resumes.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Pravin-Suthar/job-prep",
    url: "https://github.com/Pravin-Suthar/job-prep/releases",
    tags: ["Next.js, Neon DB, Tailwind, Prisma, Inngest, Shadcn UI"],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Pravin-Suthar/portfolio",
    url: "https://github.com/Pravin-Suthar/portfolio",
    tags: ["Next.js", "Sass", "Web Development"],
  },
];
export default projects;

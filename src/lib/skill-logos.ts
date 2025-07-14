// This file maps skill names to their respective logos
// We're using SVG logos from simple-icons: https://simpleicons.org/

interface SkillLogo {
  src: string;
  alt: string;
  invertInDarkMode?: boolean;
}

// Map of skill names to their logos
export const skillLogos: Record<string, SkillLogo> = {
  "Flutter": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    alt: "Flutter Logo"
  },
  "Firebase": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    alt: "Firebase Logo"
  },
  "React.js": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React Logo"
  },
  "Node.js": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js Logo"
  },
  "Java": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    alt: "Java Logo"
  },
  "DevOps": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", 
    alt: "DevOps Logo"
  },
  "MongoDB": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    alt: "MongoDB Logo"
  },
  "Express.js": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
    alt: "Express.js Logo",
    invertInDarkMode: true
  },
  "PostgreSQL": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    alt: "PostgreSQL Logo"
  },
  "MySQL": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    alt: "MySQL Logo"
  },
  "Git": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    alt: "Git Logo"
  },
  "GitHub": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    alt: "GitHub Logo",
    invertInDarkMode: true
  },
  "GitLab": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    alt: "GitLab Logo"
  },
  "AWS EC2": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    alt: "AWS EC2 Logo"
  },
  "Docker": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    alt: "Docker Logo"
  },
  "Linux": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    alt: "Linux Logo"
  },
  "JavaScript": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript Logo"
  },
  "Dart": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    alt: "Dart Logo"
  },
  "REST APIs": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", 
    alt: "REST API Logo",
    invertInDarkMode: true
  },
  "CI/CD": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    alt: "CI/CD Logo"
  },
  "Bitbucket": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original-wordmark.svg",
    alt: "Bitbucket Logo",
    invertInDarkMode: true
  }
};

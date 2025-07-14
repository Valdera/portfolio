import { CarouselItem, Project, SocialLink, TimelineItem } from "@/types/index";

export const siteConfig = {
  name: "Fauzan Valdera",
  description:
    "Software engineer with extensive experience building scalable cloud solutions.",
  url: "https://valdera.dev",
  ogImage: "https://valdera.dev/og.jpg",
  links: {
    github: "https://github.com/valdera",
    linkedin: "https://linkedin.com/in/valdera",
  },
} as const;

export const workExperience: TimelineItem[] = [
  {
    title: "Senior Software Engineer",
    organization: "Example Tech",
    period: "2021 - Present",
    description: [
      "Led development of cloud-native microservices architecture",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
    ],
    tags: ["AWS", "Kubernetes", "Node.js", "React", "TypeScript"],
  },
  {
    title: "Software Engineer",
    organization: "Tech Solutions Inc",
    period: "2019 - 2021",
    description: [
      "Developed scalable backend services using Node.js and Python",
      "Optimized database queries improving performance by 40%",
      "Collaborated with cross-functional teams to deliver features",
    ],
    tags: ["Python", "Node.js", "PostgreSQL", "Redis", "Docker"],
  },
];

export const education: TimelineItem[] = [
  {
    title: "Master of Science in Computer Science",
    organization: "Example University",
    period: "2017 - 2019",
    description: [
      "Specialized in Distributed Systems and Cloud Computing",
      "Published research paper on scalable microservices architecture",
    ],
  },
  {
    title: "Bachelor of Science in Computer Science",
    organization: "Tech University",
    period: "2013 - 2017",
    description: [
      "Graduated with First Class Honors",
      "Led university programming team to regional finals",
    ],
  },
];

export const involvement: TimelineItem[] = [
  {
    title: "Tech Community Lead",
    organization: "Local Developer Community",
    period: "2020 - Present",
    description: [
      "Organize monthly tech talks and workshops",
      "Mentor aspiring developers in the community",
      "Build relationships with local tech companies",
    ],
  },
  {
    title: "Open Source Contributor",
    organization: "Various Projects",
    period: "2018 - Present",
    description: [
      "Active contributor to several open-source projects",
      "Created developer tools used by thousands",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Cloud Management Platform",
    description:
      "Enterprise-grade cloud management platform handling thousands of resources across multiple cloud providers.",
    techStack: ["React", "Node.js", "TypeScript", "AWS", "Terraform"],
    links: {
      demo: "https://example.com/cloud-platform",
    },
    image: "/images/project-1.jpg",
    category: "professional",
  },
  {
    title: "Open Source CLI Tool",
    description:
      "Developer productivity tool with over 1000 GitHub stars, helping teams automate their workflows.",
    techStack: ["Go", "GitHub Actions", "Docker"],
    links: {
      github: "https://github.com/username/cli-tool",
      demo: "https://cli-tool.dev",
    },
    image: "/images/project-2.jpg",
    category: "opensource",
  },
  {
    title: "Personal Blog Platform",
    description:
      "Modern blog platform built with Next.js and MDX, featuring dark mode and code syntax highlighting.",
    techStack: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    links: {
      github: "https://github.com/username/blog",
      demo: "https://blog.example.com",
    },
    image: "/images/project-3.jpg",
    category: "personal",
  },
];

export const blogs: CarouselItem[] = [
  {
    id: "1",
    title: "Building Scalable Cloud Solutions",
    description: "Learn how to architect and implement scalable solutions in the cloud.",
    image: "/images/blog-1.jpg",
    link: "https://medium.com/@your-username/article-1",
  },
  {
    id: "2",
    title: "Modern Web Development Best Practices",
    description: "Explore the latest trends and best practices in web development.",
    image: "/images/blog-2.jpg",
    link: "https://medium.com/@your-username/article-2",
  },
];

export const videos: CarouselItem[] = [
  {
    id: "1",
    title: "Cloud Architecture Tutorial",
    description: "A comprehensive guide to cloud architecture patterns.",
    image: "/images/video-1.jpg",
    link: "https://youtube.com/your-channel/video-1",
  },
  {
    id: "2",
    title: "Web Development Tips",
    description: "Essential tips and tricks for modern web development.",
    image: "/images/video-2.jpg",
    link: "https://youtube.com/your-channel/video-2",
  },
];

export const courses: CarouselItem[] = [
  {
    id: "1",
    title: "Cloud Computing Masterclass",
    description: "Master cloud computing with hands-on projects.",
    image: "/images/course-1.jpg",
    link: "https://udemy.com/course/cloud-computing",
  },
  {
    id: "2",
    title: "Full Stack Development",
    description: "Learn full stack development from scratch.",
    image: "/images/course-2.jpg",
    link: "https://udemy.com/course/full-stack",
  },
]; 
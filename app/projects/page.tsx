import Navigation from "@/components/navigation/Navigation";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
  };
  image: string;
  category: "professional" | "opensource" | "personal";
}

const projects: Project[] = [
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background-light transition-colors hover:border-primary">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
        <p className="mb-4 text-sm text-foreground/60">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-background/50 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              View Source
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectSection({
  title,
  category,
}: {
  title: string;
  category: Project["category"];
}) {
  const filteredProjects = projects.filter(
    (project) => project.category === category
  );

  return (
    <section className="mb-12">
      <h2 className="mb-8 text-2xl font-bold">{title}</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

const Projects = () => {
  return (
    <>
      <Navigation />
      <div className="container py-12">
        <h1 className="mb-12 text-center text-4xl font-bold">My Projects</h1>
        <div>
          <ProjectSection title="Professional Projects" category="professional" />
          <ProjectSection title="Open Source" category="opensource" />
          <ProjectSection title="Personal Projects" category="personal" />
        </div>
      </div>
    </>
  );
};

export default Projects; 
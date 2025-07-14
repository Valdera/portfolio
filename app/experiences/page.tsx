import Navigation from "@/components/navigation/Navigation";

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string[];
  tags?: string[];
}

const workExperience: TimelineItem[] = [
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

const education: TimelineItem[] = [
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

const involvement: TimelineItem[] = [
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

function TimelineSection({
  title,
  items,
}: {
  title: string;
  items: TimelineItem[];
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-8 text-2xl font-bold">{title}</h2>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border bg-background-light p-6 transition-colors hover:border-primary"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-foreground/60">{item.organization}</p>
              </div>
              <span className="rounded-full bg-primary px-3 py-1 text-sm text-background">
                {item.period}
              </span>
            </div>
            <ul className="mb-4 list-inside list-disc space-y-2 text-foreground/80">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            {item.tags && (
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-background/50 px-3 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const Experiences = () => {
  return (
    <>
      <Navigation />
      <div className="container py-12">
        <h1 className="mb-12 text-center text-4xl font-bold">My Experience</h1>
        <div className="mx-auto max-w-4xl">
          <TimelineSection title="Work Experience" items={workExperience} />
          <TimelineSection title="Education" items={education} />
          <TimelineSection title="Community Involvement" items={involvement} />
        </div>
      </div>
    </>
  );
};

export default Experiences; 
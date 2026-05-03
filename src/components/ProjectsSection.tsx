import { Folder, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

type Project = {
  _id: string;
  title: string;
  summary?: string;
  url?: string;
  tags?: string[];
};

const ProjectsSection = () => {

  // Mock data for immediate display
  const mockProjects: Project[] = [
  {
    _id: "1",
  title: "ThinkSphere",
  summary: "Full-stack blogging platform for peer-driven knowledge sharing with authentication, profile pages, blog creation, likes, and category-based search.",
  url: "https://github.com/SamikshaPharakate/ThinkSphere",
  tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "CSS"]
    },
  {
    _id: "2",
  title: "AI-Healers",
  summary: "AI-powered healthcare assistant platform that provides symptom guidance, intelligent support, and accessible health-related solutions using modern web technologies.",
  url: "https://github.com/SamikshaPharakate/AI-Healers",
  tags: ["React", "Node.js", "Express.js", "MongoDB", "AI/ML", "API"]
    },
  {
    _id: "3",
  title: "College Event Management",
  summary: "Web-based event management system for colleges to organize, manage, and track student events efficiently.",
  url: "https://github.com/SamikshaPharakate/College_Event_management",
  tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    },
  {
    _id: "4",
  title: "Personal Portfolio",
  summary: "Responsive personal portfolio website showcasing projects, skills, achievements, and contact details with modern UI design.",
  url: "https://github.com/SamikshaPharakate/samiksha-s-Portfolio",
  tags: ["React", "JavaScript", "CSS", "Responsive Design"]
    },
  {
    _id: "5",
  title: "Expense Manager",
  summary: "Expense tracking application to manage daily spending, categorize transactions, and monitor budgets effectively.",
  url: "https://github.com/SamikshaPharakate/ExpenseManager",
  tags: ["Java", "Spring Boot", "MySQL", "REST API"]
    }
  ];

  const {data: _, isLoading, error } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => mockProjects,
  });

  const projects = mockProjects;
  const featured = projects.slice(0, 2);
  const minis = projects.slice(2, 5);

  return (
  <section id="projects" className="section-padding bg-secondary/10 relative overflow-hidden">
    {/* Decorative Blur Orbs */}
    <div className="absolute top-0 right-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-[20%] left-[-10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container-custom relative z-10 flex justify-center items-center flex-col">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-4">
          Recent Endeavors
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
          Featured <span className="gradient-text-projects drop-shadow-[0_0_20px_rgba(255,107,107,0.3)]">Projects</span>
        </h2>
        <p className="text-muted-foreground/80 text-lg leading-relaxed">
          A curated selection of my technical projects that demonstrate my problem-solving
          abilities and passion for building functional, beautiful web applications.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
        {isLoading &&
          [1, 2, 3].map((s) => (
            <div
              key={s}
              className="glass-card p-6 min-h-[300px] animate-pulse border border-white/5"
            >
              <div className="h-14 w-14 rounded-2xl bg-secondary/50 mb-6" />
              <div className="h-6 w-3/4 bg-secondary/50 rounded mb-4" />
              <div className="h-4 w-full bg-secondary/30 rounded mb-2" />
              <div className="h-4 w-5/6 bg-secondary/30 rounded" />
            </div>
          ))}
        {!isLoading && featured.length === 0 && (
          <div className="md:col-span-2 lg:col-span-3">
            <div className="glass-card p-12 text-center text-muted-foreground border-dashed border-white/20">
              <Folder size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">No projects available yet.</p>
              <p className="text-sm">They will appear here once added to the database.</p>
            </div>
          </div>
        )}
        {!isLoading &&
          featured.map((p, i) => (
            <div
              key={p._id}
              className="glass-card group hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-8 relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-2xl bg-secondary border border-white/5 group-hover:border-primary/30 group-hover:shadow-glow transition-all duration-300">
                    <Folder size={32} className="text-primary" />
                  </div>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300"
                      aria-label="View Project"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  )}
                </div>
                <h3 className="font-heading font-bold text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-base text-muted-foreground/80 mb-6 flex-grow leading-relaxed">
                  {p.summary || "A comprehensive web development project involving modern frameworks and best practices."}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags?.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Mini Projects Section */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-heading font-bold">
            Other <span className="gradient-text-accent">Notable Work</span>
          </h3>
          <div className="h-px bg-white/10 flex-grow ml-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {isLoading &&
            [1, 2, 3, 4].map((s) => (
              <div key={s} className="glass-card p-5 animate-pulse border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-secondary/50 w-10 h-10" />
                  <div className="w-5 h-5 bg-secondary/60 rounded-full" />
                </div>
                <div className="h-5 w-3/4 bg-secondary/50 rounded mb-3" />
                <div className="h-3 w-full bg-secondary/30 rounded" />
              </div>
            ))}
          {!isLoading &&
            minis.map((p) => (
              <a
                href={p.url || "#"}
                target={p.url ? "_blank" : "_self"}
                rel="noopener noreferrer"
                key={p._id}
                className="glass-card p-6 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_10px_30px_-10px_rgba(45,212,191,0.2)] transition-all duration-300 group cursor-pointer block"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <Folder size={20} />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-accent transition-colors"
                  />
                </div>
                <h4 className="font-heading font-bold text-lg mb-2 text-foreground group-hover:text-accent transition-colors">{p.title}</h4>
                <p className="text-sm text-muted-foreground/80 line-clamp-2 leading-relaxed">
                  {p.summary || "An interesting coding challenge demonstrating strong fundamentals in system design."}
                </p>
              </a>
            ))}
        </div>
      </div>

    {/* View All Button */}
    <div className="text-center mt-20">
      <Button className="rounded-full px-8 py-6 text-base group bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300" variant="outline" size="lg" asChild>
        <a
          href="https://github.com/SamikshaPharakate"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          View More on GitHub
          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </Button>
    </div>

    {error && (
      <div className="max-w-md mx-auto mt-8 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-center">
        <p className="text-sm text-red-400 font-medium">
          Failed to load projects. Please try again later.
        </p>
      </div>
    )}
  </div>
</section>
  );
};

export default ProjectsSection;

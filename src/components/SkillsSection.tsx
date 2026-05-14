import { useState } from "react";

type SkillCategory = "all" | "frontend" | "backend" | "languages" | "tools";

const skills = [
  // Frontend
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "React.js", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },

  // Languages
  { name: "C", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "Python", category: "languages" },

  // Tools
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "IntelliJ IDEA", category: "tools" },
  { name: "Eclipse", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "npm", category: "tools" },
];

const logos: Record<string, string> = {
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "IntelliJ IDEA": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-plain.svg",
  "Eclipse": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  "npm": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
};

const invertIcons = ["Express.js", "GitHub", "npm"];

const Logo = ({ name }: { name: string }) => {
  const [error, setError] = useState(false);
  const src = logos[name];
  
  return src && !error ? (
    <img
      src={src}
      alt={name}
      className={`w-7 h-7 object-contain ${invertIcons.includes(name) ? "brightness-0 invert" : ""}`}
      loading="lazy"
      onError={() => setError(true)}
    />
  ) : (
    <span className="text-primary font-heading font-bold text-lg">
      {name.charAt(0)}
    </span>
  );
};

const categories: { key: SkillCategory; label: string }[] = [
  { key: "all", label: "All Skills" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "languages", label: "Languages" },
  { key: "tools", label: "Tools" },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm mb-4">
            My Technical Arsenal
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Skills & <span className="gradient-text-skills drop-shadow-[0_0_20px_rgba(255,107,107,0.3)]">Technologies</span>
          </h2>
          <p className="text-muted-foreground/80 text-lg leading-relaxed px-4">
            A comprehensive toolkit built through consistent learning and hands-on
            project experience, ready to bring ideas to life.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-300 border ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(155,81,224,0.4)]"
                  : "bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10 hover:text-foreground hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Card Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-card border border-white/5 flex items-center justify-center overflow-hidden group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(155,81,224,0.3)] transition-all duration-500 group-hover:scale-110">
                  <Logo name={skill.name} />
                </div>
                <p className="font-heading font-semibold text-base text-foreground group-hover:text-primary transition-colors">{skill.name}</p>
                <div className="h-1 w-0 bg-primary mx-auto mt-2 rounded-full group-hover:w-1/2 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

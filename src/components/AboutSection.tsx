import { GraduationCap, Code2, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing efficient, readable, and maintainable code",
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description: "Exploring innovative approaches to solve problems",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in team environments",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Always eager to learn new technologies",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-2">
              Discover My Journey
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Passionate About <span className="gradient-text drop-shadow-[0_0_20px_rgba(155,81,224,0.2)]">Technology</span>
            </h2>
            <div className="space-y-4 text-muted-foreground/90 text-lg leading-relaxed">
              <p>
                I'm Samiksha Sanjay Pharakate, a curious and passionate Computer
                Science student specializing in Artificial Intelligence and Machine
                Learning at KIT's College of Engineering, Kolhapur.
              </p>
              <p>
                My journey in tech started with a fascination for how things work
                behind the screen. Today, I enjoy building meaningful digital
                experiences, exploring creative ideas, and constantly improving my
                problem-solving abilities.
              </p>
              <p>
                I believe in the power of clean, efficient code and the importance
                of continuous learning. When I'm not coding, you'll find me
                exploring new technologies, contributing to open-source projects, or
                collaborating with fellow developers.
              </p>
            </div>

            {/* Education Card */}
            <div className="mt-8 glass-card p-6 group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-glow">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-1 text-foreground">
                    B.Tech in Computer Science & Engineering (AIML)
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    KIT's College of Engineering, Kolhapur
                  </p>
                  <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    <span>Expected Graduation: 2027</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-5 relative">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent blur-3xl pointer-events-none" />
            
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 hover:-translate-y-2 transition-transform duration-300 group border border-white/5 hover:border-primary/50 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="p-3.5 rounded-xl bg-secondary border border-white/5 text-primary w-fit mb-5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(155,81,224,0.4)] transition-all duration-300">
                    <item.icon size={26} />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

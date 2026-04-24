import { Layout, Code, Database, Palette } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Web Design",
    description:
      "Creating visually appealing and user-friendly website layouts with modern design principles and responsive frameworks.",
    features: ["Responsive Design", "UI/UX Principles", "Modern Aesthetics"],
  },
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building interactive and dynamic user interfaces using HTML, CSS, JavaScript, and React.js with clean, maintainable code.",
    features: ["React.js Apps", "Tailwind CSS", "Interactive UIs"],
  },
  {
    icon: Database,
    title: "Full-Stack Projects",
    description:
      "Developing end-to-end web applications with Node.js backend, Express.js APIs, and MongoDB database integration.",
    features: ["REST APIs", "Database Design", "MERN Stack"],
  },
  {
    icon: Palette,
    title: "UI Implementation",
    description:
      "Translating design mockups into pixel-perfect, functional web pages with attention to detail and accessibility.",
    features: ["Pixel Perfect", "Cross-browser", "Performance Focused"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[radial-gradient(ellipse_at_center,rgba(60,210,180,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm mb-4">
            What I Offfer
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            My <span className="gradient-text-services drop-shadow-[0_0_20px_rgba(45,212,191,0.3)]">Services</span>
          </h2>
          <p className="text-muted-foreground/80 text-lg leading-relaxed">
            As a student developer, I offer dedicated solutions focused on modern practices.
            I build elegant, responsive, and functional web experiences tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-10 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_15px_40px_-10px_rgba(45,212,191,0.3)] transition-all duration-500 group relative overflow-hidden border border-white/5"
            >
              {/* Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="p-5 rounded-2xl bg-secondary border border-white/5 text-accent w-fit mb-8 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] transition-all duration-500">
                  <service.icon size={36} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-heading font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground/90 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-sm font-medium px-4 py-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground group-hover:border-accent/20 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-20 max-w-xl mx-auto text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <p className="text-sm md:text-base text-muted-foreground font-medium">
            <span className="text-accent">⚡ Currently focused</span> on learning and building personal projects, 
            but always open to discussing freelance opportunities and exciting collaborations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

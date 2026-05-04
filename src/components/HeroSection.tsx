import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import resumePdf from "@/assets/resume.pdf";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/20 blur-[100px] animate-pulse-glow mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent/20 blur-[100px] animate-pulse-glow animation-delay-500 mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
      </div>

      <div className="container-custom relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80 tracking-wide">
              Welcome to my portfolio
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 animate-fade-up tracking-tight leading-[1.1]">
             Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="gradient-text drop-shadow-[0_0_40px_rgba(155,81,224,0.3)]">Samiksha</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 rounded-full" />
            </span>
          </h1>

          {/* Title */}
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-up animation-delay-200 font-medium">
            Transforming Ideas into <span className="text-foreground">Digital Reality</span>
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-300">
            A passionate Computer Science student and Aspiring Full-Stack Developer creating elegant, 
            efficient, and user-centric web experiences with a focus on modern AI & ML integrations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12 animate-fade-up animation-delay-400">
            <Button className="relative group overflow-hidden rounded-full px-8 py-6 text-base" size="lg" asChild>
              <a href="#projects">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 font-semibold text-white flex items-center gap-2">
                  View My Work
                </span>
                <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(155,81,224,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
            
            <Button className="rounded-full px-8 py-6 text-base bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300" variant="outline" size="lg" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>

            <Button className="rounded-full px-8 py-6 text-base text-primary hover:text-primary-foreground hover:bg-primary border border-primary/20 transition-all duration-300" variant="ghost" size="lg" asChild>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" download="Samiksha_Pharakate_Resume.pdf" className="flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-up animation-delay-500">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-card border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github size={22} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/samiksha-pharakate-5781182a7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-card border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:samikshaspharakate070515@gmail.com"
              className="p-3.5 rounded-xl bg-card border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail size={22} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-float group"
          aria-label="Scroll to About"
        >
          <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
          <div className="w-8 h-12 rounded-full border-2 border-current flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-current rounded-full animate-[bounce_2s_infinite]" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

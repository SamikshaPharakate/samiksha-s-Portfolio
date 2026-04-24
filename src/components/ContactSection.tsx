import { useState } from "react";
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/10 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-4">
            Start A Conversation
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Let's <span className="gradient-text-contact drop-shadow-[0_0_20px_rgba(255,107,107,0.3)]">Connect</span>
          </h2>
          <p className="text-muted-foreground/80 text-lg leading-relaxed px-4">
            Have a project in mind, want to discuss an opportunity, or just want to say hello? 
            My inbox is always open. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Email Card */}
            <div className="glass-card p-8 flex items-start gap-6 hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 group">
              <div className="p-4 rounded-xl bg-secondary border border-white/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(155,81,224,0.4)] transition-all duration-300">
                <Mail size={28} />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground">Email</h3>
                <a
                  href="mailto:samikshaspharakate070515@gmail.com"
                  className="text-muted-foreground/90 font-medium hover:text-primary transition-colors block break-all"
                >
                  samikshaspharakate070515
                  <br className="hidden sm:block lg:hidden" />
                  @gmail.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-8 flex items-start gap-6 hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 group">
              <div className="p-4 rounded-xl bg-secondary border border-white/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(155,81,224,0.4)] transition-all duration-300">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground">Location</h3>
                <p className="text-muted-foreground/90 font-medium tracking-wide">Kolhapur, Maharashtra, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 border border-white/5">
              <h3 className="font-heading font-bold text-xl mb-6 text-foreground">Social Profiles</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-secondary border border-white/5 text-muted-foreground hover:bg-white hover:text-background hover:shadow-lg transition-all duration-300 group flex-1 flex justify-center"
                  aria-label="GitHub"
                >
                  <Github size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/samiksha-pharakate-5781182a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-secondary border border-white/5 text-muted-foreground hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:shadow-lg transition-all duration-300 group flex-1 flex justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="mailto:samikshaspharakate070515@gmail.com"
                  className="p-4 rounded-xl bg-secondary border border-white/5 text-muted-foreground hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335] hover:shadow-lg transition-all duration-300 group flex-1 flex justify-center"
                  aria-label="Email"
                >
                  <Mail size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6 relative overflow-hidden border-white/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <h3 className="text-2xl font-heading font-bold mb-8 text-foreground">Send a Message</h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold tracking-wide text-foreground/90">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-white/10 focus:border-primary focus:bg-secondary/50 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-foreground placeholder-muted-foreground/50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold tracking-wide text-foreground/90">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-white/10 focus:border-primary focus:bg-secondary/50 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-foreground placeholder-muted-foreground/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold tracking-wide text-foreground/90">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-white/10 focus:border-primary focus:bg-secondary/50 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-foreground placeholder-muted-foreground/50"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold tracking-wide text-foreground/90">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-white/10 focus:border-primary focus:bg-secondary/50 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-foreground placeholder-muted-foreground/50 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className={`w-full rounded-xl py-6 text-lg font-semibold transition-all duration-300 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-[0_0_30px_rgba(155,81,224,0.4)] bg-gradient-to-r from-primary to-accent border-0 text-white"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send size={20} className="ml-2" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

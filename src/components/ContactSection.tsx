import { useState } from "react";
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react";

// ─── WEB3FORMS CREDENTIALS ─────────────────────────────────────────────────
// Go to https://web3forms.com/ and enter your email to get a free access key
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";
const RECIPIENT_EMAIL = "samikshaspharakate070515@gmail.com";
// ──────────────────────────────────────────────────────────────────────────────

const ContactSection = () => {
  // ── Separate state for each field (fixes the "can't type" bug) ──────────────
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Button is only active when all 4 fields have content
  const isFormFilled = name.trim() !== "" && email.trim() !== "" && subject.trim() !== "" && message.trim() !== "";

  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: name,
          email: email,
          subject: subject,
          message: message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setName(""); setEmail(""); setSubject(""); setMessage("");
      } else {
        throw new Error(data.message || "Failed to send message.");
      }
    } catch (err: any) {
      console.error("Web3Forms failed:", err);
      setStatus("error");
      setErrorMsg(err.message || "Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-secondary/10 relative overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-4">
            Start A Conversation
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Let's{" "}
            <span className="gradient-text-contact drop-shadow-[0_0_20px_rgba(255,107,107,0.3)]">
              Connect
            </span>
          </h2>
          <p className="text-muted-foreground/80 text-lg leading-relaxed px-4">
            Have a project in mind, want to discuss an opportunity, or just want
            to say hello? My inbox is always open. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* ── Left: Info Cards ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Email card */}
            <div className="glass-card p-8 flex items-start gap-6 hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 group">
              <div className="p-4 rounded-xl bg-secondary border border-white/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(155,81,224,0.4)] transition-all duration-300">
                <Mail size={28} />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground">Email</h3>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/90 font-medium hover:text-primary transition-colors block break-all"
                >
                  {RECIPIENT_EMAIL}
                </a>
              </div>
            </div>

            {/* Location card */}
            <div className="glass-card p-8 flex items-start gap-6 hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 group">
              <div className="p-4 rounded-xl bg-secondary border border-white/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(155,81,224,0.4)] transition-all duration-300">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground">Location</h3>
                <p className="text-muted-foreground/90 font-medium tracking-wide">
                  Kolhapur, Maharashtra, India
                </p>
              </div>
            </div>

            {/* Social card */}
            <div className="glass-card p-8 border border-white/5">
              <h3 className="font-heading font-bold text-xl mb-6 text-foreground">Social Profiles</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/SamikshaPharakate/"
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
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-secondary border border-white/5 text-muted-foreground hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335] hover:shadow-lg transition-all duration-300 group flex-1 flex justify-center"
                  aria-label="Email"
                >
                  <Mail size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 md:p-10 relative overflow-hidden border-white/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

              <h3 className="text-2xl font-heading font-bold mb-8 text-foreground">
                Send a Message
              </h3>

              {/* Success state */}
              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 flex items-center gap-3">
                  <span className="text-2xl">🎉</span>
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm opacity-80">Samiksha will get back to you soon.</p>
                  </div>
                </div>
              )}

              {/* Error state */}
              {status === "error" && errorMsg && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  ⚠️ {errorMsg}
                </div>
              )}

              <div className="space-y-6">

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold tracking-wide text-foreground/90">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-white/10 focus:border-primary focus:bg-secondary/50 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-foreground placeholder-muted-foreground/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold tracking-wide text-foreground/90">
                      Your Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-white/10 focus:border-primary focus:bg-secondary/50 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-foreground placeholder-muted-foreground/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold tracking-wide text-foreground/90">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-white/10 focus:border-primary focus:bg-secondary/50 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-foreground placeholder-muted-foreground/50"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold tracking-wide text-foreground/90">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-white/10 focus:border-primary focus:bg-secondary/50 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-foreground placeholder-muted-foreground/50 resize-none"
                    placeholder="viewer must be written msg here"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!isFormFilled || status === "sending"}
                  className={`w-full rounded-xl py-5 text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300
                    ${!isFormFilled || status === "sending"
                      ? "opacity-40 cursor-not-allowed bg-primary/50 text-white"
                      : "bg-gradient-to-r from-primary to-accent text-white cursor-pointer hover:shadow-[0_0_30px_rgba(155,81,224,0.5)] hover:scale-[1.01] active:scale-[0.99]"
                    }`}
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>

                {!isFormFilled && status !== "success" && (
                  <p className="text-center text-xs text-muted-foreground/40 mt-1">
                    Fill all fields to activate the Send button
                  </p>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { motion } from "framer-motion";
import { NavBar } from "@/components/nav-bar";
import { HeroSection } from "@/components/hero-section";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { 
  Palette, 
  Video, 
  Layout, 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Download,
  Briefcase,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const skills = [
  "Adobe Photoshop", 
  "Adobe Premiere Pro", 
  "Adobe XD", 
  "Blender", 
  "After Effects", 
  "Figma", 
  "Color Grading", 
  "Sound Design"
];

const experience = [
  {
    role: "Graphic Designer",
    company: "VROCUS PRODUCTIONS",
    period: "2023 - Present",
    desc: "Leading visual design projects for diverse clients, focusing on brand identity and marketing collateral."
  },
  {
    role: "Graphic Design Mentor",
    company: "Quantum Group Of Institutions",
    period: "Collaboration",
    desc: "Conducted workshops and mentored students in design fundamentals and software tools."
  },
  {
    role: "Freelance Designer",
    company: "Self-Employed",
    period: "2022 - Present",
    desc: "Working with offline and remote clients to deliver high-quality video edits and graphic assets."
  }
];

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <NavBar />
      
      <main>
        {/* HERO */}
        <HeroSection />

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 md:py-32 relative">
          <div className="container px-4 md:px-6">
            <motion.div 
              {...fadeIn}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-[100px] rounded-full" />
                <div className="relative z-10 glass-panel p-8 rounded-2xl border-l-4 border-l-primary">
                  <h3 className="text-2xl font-bold font-display mb-4">Who is Rupesh?</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    I am a creative and detail-oriented <span className="text-primary font-medium">Graphic Designer</span> with a passion for visual storytelling. 
                    Skilled in designing engaging graphics, branding, and digital content to enhance user experience. 
                    My approach combines technical proficiency in tools like Photoshop and Premiere Pro with an artistic eye for composition and color.
                  </p>
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <GraduationCap />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Education</p>
                        <p className="font-semibold">B.Tech CSE (AI & ML)</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="rounded-full bg-white text-black hover:bg-gray-200">
                      <Download className="w-4 h-4 mr-2" /> Download Resume
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Experience & <span className="text-primary">Journey</span></h2>
                  <div className="space-y-6">
                    {experience.map((exp, i) => (
                      <div key={i} className="group flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 rounded-full bg-primary mt-2 group-hover:shadow-[0_0_10px_#00f3ff] transition-all" />
                          <div className="w-0.5 h-full bg-white/10 group-last:hidden mt-2" />
                        </div>
                        <div className="pb-6">
                          <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h4>
                          <p className="text-sm font-medium text-secondary mb-2">{exp.company} • {exp.period}</p>
                          <p className="text-muted-foreground text-sm max-w-md">{exp.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES / SKILLS */}
        <section id="skills" className="py-20 bg-muted/20">
          <div className="container px-4 md:px-6">
            <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">My <span className="text-secondary">Expertise</span></h2>
              <p className="text-muted-foreground">The tools and technologies I use to bring ideas to life.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.1 }}
                className="glass-panel p-8 rounded-2xl hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Palette className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Graphic Design</h3>
                <p className="text-muted-foreground mb-6 text-sm">Brand Identity, Social Media Creatives, Posters, and Marketing Materials designed to stand out.</p>
                <div className="flex flex-wrap gap-2">
                  {["Photoshop", "Illustrator", "XD"].map(t => (
                    <span key={t} className="text-xs border border-white/10 px-2 py-1 rounded bg-black/20">{t}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="glass-panel p-8 rounded-2xl hover:border-secondary/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                  <Video className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Video Editing</h3>
                <p className="text-muted-foreground mb-6 text-sm">Cinematic storytelling, Color Grading, Motion Graphics, and sound design for immersive content.</p>
                <div className="flex flex-wrap gap-2">
                  {["Premiere Pro", "After Effects", "Davinci"].map(t => (
                    <span key={t} className="text-xs border border-white/10 px-2 py-1 rounded bg-black/20">{t}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.3 }}
                className="glass-panel p-8 rounded-2xl hover:border-white/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Layout className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">3D & UI/UX</h3>
                <p className="text-muted-foreground mb-6 text-sm">Creating intuitive user interfaces and adding depth with 3D elements using Blender.</p>
                <div className="flex flex-wrap gap-2">
                  {["Blender", "Figma", "UI/UX"].map(t => (
                    <span key={t} className="text-xs border border-white/10 px-2 py-1 rounded bg-black/20">{t}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Featured <span className="text-primary">Works</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A selection of my recent projects in graphic design and video production.
              </p>
            </motion.div>
            
            <PortfolioGrid />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 bg-gradient-to-b from-background to-black">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <motion.div {...fadeIn}>
                <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">Let's work <br /><span className="text-secondary">together</span></h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Have a project in mind? Looking for a creative partner? 
                  Reach out and let's create something extraordinary.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                      <p className="font-semibold text-lg">+91 7696277890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-secondary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                      <p className="font-semibold text-lg">arunassasin1@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                      <p className="font-semibold text-lg">Ludhiana, Punjab</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                {...fadeIn} 
                transition={{ delay: 0.2 }}
                className="glass-panel p-8 rounded-2xl"
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input placeholder="John Doe" className="bg-black/20 border-white/10 h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input placeholder="john@example.com" className="bg-black/20 border-white/10 h-12" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="Project Inquiry" className="bg-black/20 border-white/10 h-12" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project..." 
                      className="bg-black/20 border-white/10 min-h-[150px] resize-none" 
                    />
                  </div>

                  <Button className="w-full h-12 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-white/5 bg-black text-center text-sm text-muted-foreground">
        <div className="container">
          <p>© 2026 Rupesh Kumar. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-50">Designed & Built with ❤️</p>
        </div>
      </footer>
    </div>
  );
}

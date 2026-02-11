import { motion } from "framer-motion";
import { ArrowDown, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  
  const scrollToWork = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm tracking-wide"
          >
            AVAILABLE FOR FREELANCE WORK
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6"
          >
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary text-glow">Rupesh Kumar</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto"
          >
            Graphic Designer & Video Editor. Crafting <span className="text-white font-medium">Visual Stories</span> That Convert.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              onClick={scrollToWork}
              className="h-14 px-8 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all text-base"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToContact}
              className="h-14 px-8 rounded-full border-white/20 hover:bg-white/10 hover:border-white/40 text-base"
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social Proof / Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex items-center justify-center gap-6"
          >
            {[
              { icon: Linkedin, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Mail, href: "mailto:arunassasin1@gmail.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="p-3 rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-muted-foreground/50 w-6 h-6" />
      </motion.div>
    </section>
  );
}

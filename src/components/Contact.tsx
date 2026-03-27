import { Phone, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Contact = () => (
  <section id="contact" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-wide mb-6">
          Ready for a <span className="text-gradient-cyan">Showroom Finish?</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-muted-foreground">
          <a href="tel:8329555376" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={18} className="text-primary" />
            (832) 955-5376
          </a>
          <span className="hidden sm:block text-border">|</span>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-primary" />
            8001 Braesmain Dr, Houston, TX 77025
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <a
          href="tel:8329555376"
          className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm animate-pulse_glow transition-transform hover:scale-105"
        >
          Call Now
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default Contact;

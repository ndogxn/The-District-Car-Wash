import { Droplets, Armchair, Car, Gem, Trash2, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  { icon: Droplets, title: "Hand Wash", desc: "Thorough exterior hand wash with premium soap and microfiber towels." },
  { icon: Armchair, title: "Interior Detailing", desc: "Deep clean of all interior surfaces, seats, and carpets." },
  { icon: Car, title: "Exterior Detailing", desc: "Paint correction, clay bar treatment, and premium finishing." },
  { icon: Gem, title: "Waxing & Polishing", desc: "High-gloss wax application for lasting protection and shine." },
  { icon: Trash2, title: "Deep Cleaning", desc: "Complete interior extraction and sanitization service." },
  { icon: Shield, title: "Paint Protection", desc: "Ceramic coating and paint sealant for ultimate defense." },
];

const Services = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center uppercase tracking-wide mb-4">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Premium hand detailing services tailored to your vehicle's needs.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.1}>
            <div className="card-glow bg-card rounded-xl p-7 h-full group cursor-default">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-lg font-bold uppercase mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

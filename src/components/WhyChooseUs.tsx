import { Hand, ShieldCheck, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const items = [
  { icon: Hand, title: "100% Hand Washed", desc: "No automated machines, ever." },
  { icon: ShieldCheck, title: "Scratch-Free Finish", desc: "Professional techniques & quality products." },
  { icon: Sparkles, title: "Detail-Obsessed", desc: "Showroom results, every visit." },
];

const WhyChooseUs = () => (
  <section className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center uppercase tracking-wide mb-12">
          Why Choose <span className="text-primary">Us</span>
        </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.15}>
            <div className="card-glow bg-card rounded-xl p-8 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="text-primary" size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

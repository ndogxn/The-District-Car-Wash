import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reviews = [
  { text: "Great staff and service.", author: "Google Reviewer" },
  { text: "Great experience, great customer service!", author: "Google Reviewer" },
  { text: "Excellent work throughout and pretty fast too for a handwashing place.", author: "Google Reviewer" },
];

const Testimonials = () => (
  <section className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center uppercase tracking-wide mb-12">
          What Customers <span className="text-primary">Say</span>
        </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className="card-glow bg-card rounded-xl p-7 h-full flex flex-col">
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="text-gold fill-gold" size={16} />
                ))}
              </div>
              <p className="text-foreground/90 italic leading-relaxed flex-1">"{r.text}"</p>
              <p className="text-muted-foreground text-sm mt-4">— {r.author}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

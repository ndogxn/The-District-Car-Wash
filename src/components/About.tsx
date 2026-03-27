import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import aboutImg from "@/assets/about-exterior.webp";

const About = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="rounded-xl overflow-hidden card-glow">
            <img
              src={aboutImg}
              alt="The District Car Wash exterior"
              width={800}
              height={600}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6">
            About <span className="text-primary">The District</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The District Car Wash is a premium hand car wash and auto detailing service dedicated to
            delivering exceptional results with a personal touch. Unlike automated car washes, every
            vehicle is carefully cleaned by hand using professional techniques and quality products to
            ensure a scratch-free, showroom finish.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="text-gold fill-gold" size={20} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-medium">55 Google Reviews</span>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default About;

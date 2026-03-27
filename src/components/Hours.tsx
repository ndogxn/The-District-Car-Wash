import { Clock, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const schedule = [
  { day: "Monday", hours: "9 AM – 5 PM" },
  { day: "Tuesday", hours: "9 AM – 5 PM" },
  { day: "Wednesday", hours: "9 AM – 5 PM" },
  { day: "Thursday", hours: "9 AM – 5 PM" },
  { day: "Friday", hours: "9 AM – 5 PM" },
  { day: "Saturday", hours: "8 AM – 5 PM" },
  { day: "Sunday", hours: "8 AM – 5 PM" },
];

const Hours = () => (
  <section id="hours" className="py-20">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center uppercase tracking-wide mb-12">
          Hours & <span className="text-primary">Location</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="card-glow bg-card rounded-xl p-7">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="text-primary" size={22} />
              <h3 className="font-heading text-xl font-bold uppercase">Business Hours</h3>
            </div>
            <div className="space-y-3">
              {schedule.map((s) => (
                <div key={s.day} className="flex justify-between text-sm border-b border-border/30 pb-2">
                  <span className="text-foreground font-medium">{s.day}</span>
                  <span className="text-muted-foreground">{s.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="card-glow bg-card rounded-xl overflow-hidden h-full min-h-[350px]">
            <div className="flex items-center gap-2 p-7 pb-4">
              <MapPin className="text-primary" size={22} />
              <h3 className="font-heading text-xl font-bold uppercase">Find Us</h3>
            </div>
            <iframe
              title="The District Car Wash Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.0!2d-95.4308!3d29.6883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z8001+Braesmain+Dr+Houston+TX+77025!5e0!3m2!1sen!2sus!4v1700000000"
              className="w-full h-[300px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Hours;

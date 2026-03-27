import { motion } from "framer-motion";
import heroImg from "@/assets/hero-car.webp";
import { useMemo } from "react";

const Particles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 6,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image with zoom */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Premium hand car wash"
        width={1920}
        height={1080}
        className="w-full h-full object-cover blur-[2px]"
        style={{ animation: "slowZoom 20s ease-in-out infinite alternate" }}
      />
      <div className="absolute inset-0 bg-background/70" />
    </div>

    <Particles />

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-tight"
      >
        Houston's Premium{" "}
        <span className="text-gradient-cyan">Hand Car Wash</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
      >
        Every vehicle cleaned by hand. Every time.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#services"
          className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm animate-pulse_glow transition-transform hover:scale-105"
        >
          Our Services
        </a>
        <a
          href="https://maps.google.com/?q=8001+Braesmain+Dr+Houston+TX+77025"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-primary/50 text-primary font-semibold uppercase tracking-wider text-sm hover:bg-primary/10 transition-all"
        >
          Get Directions
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;

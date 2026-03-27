import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

const Counter = ({ end, suffix = "", label }: CounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl font-bold text-primary">
        {count}
        {suffix}
      </div>
      <div className="text-muted-foreground text-sm mt-2 uppercase tracking-wide">{label}</div>
    </div>
  );
};

const stats = [
  { end: 55, suffix: "+", label: "Google Reviews" },
  { end: 5, suffix: ".0", label: "Star Rating" },
  { end: 100, suffix: "%", label: "Hand Washed" },
];

const Stats = () => (
  <section className="py-16 bg-secondary/30 border-y border-border/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
      >
        {stats.map((s) => (
          <Counter key={s.label} {...s} />
        ))}
        <div className="text-center">
          <div className="font-heading text-2xl md:text-3xl font-bold text-primary">EST.</div>
          <div className="font-heading text-4xl md:text-5xl font-bold text-primary">2024</div>
          <div className="text-muted-foreground text-sm mt-2 uppercase tracking-wide">Houston's Premium Shop</div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Stats;

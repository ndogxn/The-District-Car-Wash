import { Droplets } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border/30">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Droplets className="text-primary" size={22} />
          <div>
            <span className="font-heading text-lg font-bold tracking-wider">THE DISTRICT CAR WASH</span>
            <p className="text-muted-foreground text-xs">Premium Hand Car Wash — Houston, TX</p>
          </div>
        </div>

        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#hours" className="hover:text-primary transition-colors">Hours</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>

      <div className="text-center text-muted-foreground text-xs mt-8">
        © 2025 The District Car Wash. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

import { ArrowUp, Heart } from "lucide-react";
import { Button } from "../components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Scroll to top button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-glow"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ashwini Gupta
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Flutter & Full Stack Developer passionate about creating innovative solutions 
              and delightful user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            {["Home", "About", "Experience", "Skills", "Services", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Ashwini Gupta. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Crafted with <Heart className="w-4 h-4 text-red-500 fill-current" /> and dedication
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
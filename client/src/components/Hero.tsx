import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/ashwini-profile.png";
const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent-blue/5"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent-blue/10 rotate-45 animate-float" style={{
      animationDelay: "2s"
    }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-accent-red/10 rotate-12 animate-float" style={{
      animationDelay: "4s"
    }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl text-primary font-medium">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Ashwini Gupta
              </h1>
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light">Flutter & Full Stack Developer</h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                I build fast, scalable, and delightful digital products with 2.5+ years of experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="glow" size="xl" onClick={scrollToProjects} className="group">
                Explore My Work
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl" onClick={scrollToAbout}>
                About Me
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="group"
                asChild
              >
                <a 
                  href="https://drive.google.com/uc?export=download&id=1VueZXfuSDj7ZpLaE1l9tAE9A3BLkYmej"
                  download="Ashwini_Gupta_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="https://www.linkedin.com/in/ashwini-gupta1807/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-glass-bg backdrop-blur-md border border-glass-border hover:bg-primary/20 transition-all duration-300 hover:shadow-glow">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/ashwini-gupta1807" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-glass-bg backdrop-blur-md border border-glass-border hover:bg-primary/20 transition-all duration-300 hover:shadow-glow">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:ashwinigupta8052653693@gmail.com" className="p-3 rounded-full bg-glass-bg backdrop-blur-md border border-glass-border hover:bg-primary/20 transition-all duration-300 hover:shadow-glow">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              {/* Glowing background circle */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full animate-glow opacity-20"></div>
              
              {/* Geometric frame */}
              <div className="absolute inset-8 border-2 border-primary/30 rounded-full"></div>
              <div className="absolute inset-4 border border-accent-blue/20 rounded-full"></div>
              
              {/* Profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50 shadow-card animate-float">
                <img src={profileImage} alt="Ashwini Gupta - Flutter & Full Stack Developer" className="w-full h-full object-cover" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 right-8 w-8 h-8 bg-accent-blue rounded-full animate-float" style={{
              animationDelay: "1s"
            }}></div>
              <div className="absolute -bottom-2 left-12 w-6 h-6 bg-accent-red rounded-full animate-float" style={{
              animationDelay: "3s"
            }}></div>
              <div className="absolute top-1/2 -right-4 w-4 h-4 bg-primary rotate-45 animate-float" style={{
              animationDelay: "5s"
            }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
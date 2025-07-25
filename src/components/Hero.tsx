import profileImage from "@/assets/ashwini-profile.png";
import { ArrowDown, Download, Github, Linkedin, Mail, User } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

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

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent-blue/5"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-4 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-12 sm:w-16 h-12 sm:h-16 bg-accent-blue/10 rotate-45 animate-float" style={{
      animationDelay: "2s"
    }}></div>
      <div className="absolute top-1/2 left-8 sm:left-20 w-8 sm:w-12 h-8 sm:h-12 bg-accent-red/10 rotate-12 animate-float" style={{
      animationDelay: "4s"
    }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-up order-2 lg:order-1">
            <div className="space-y-3 lg:space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl text-primary font-medium">
                Hello, I'm
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Ashwini Gupta
              </h1>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light">
                Flutter & Full Stack Developer
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 px-2 lg:px-0">
                I build fast, scalable, and delightful digital products with 2.5+ years of experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 lg:px-0">
              <Button variant="glow" size="xl" onClick={scrollToProjects} className="group w-full sm:w-auto">
                Explore My Work
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl" onClick={scrollToAbout} className="w-full sm:w-auto">
                About Me
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="group w-full sm:w-auto"
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/1VueZXfuSDj7ZpLaE1l9tAE9A3BLkYmej/view?usp=sharing"
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
          <div className="relative animate-fade-up order-1 lg:order-2 mb-8 lg:mb-0" style={{
          animationDelay: "0.3s"
        }}>
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
              {/* Glowing background circle */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full animate-glow opacity-20"></div>
              
              {/* Geometric frame */}
              <div className="absolute inset-4 sm:inset-6 md:inset-8 border-2 border-primary/30 rounded-full"></div>
              <div className="absolute inset-2 sm:inset-3 md:inset-4 border border-accent-blue/20 rounded-full"></div>
              
              {/* Profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50 shadow-card animate-float bg-background">
                {!imageError ? (
                  <img 
                    src={profileImage} 
                    alt="Ashwini Gupta - Flutter & Full Stack Developer" 
                    className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    loading="eager"
                    decoding="async"
                    style={{
                      minHeight: '100%',
                      minWidth: '100%'
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10">
                    <User className="w-24 h-24 text-primary" />
                  </div>
                )}
                
                {/* Loading placeholder */}
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/10 animate-pulse">
                    <User className="w-24 h-24 text-primary" />
                  </div>
                )}
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 right-6 sm:-top-3 sm:right-8 md:-top-4 md:right-8 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-accent-blue rounded-full animate-float" style={{
              animationDelay: "1s"
            }}></div>
              <div className="absolute -bottom-1 left-6 sm:-bottom-2 sm:left-8 md:-bottom-2 md:left-12 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-accent-red rounded-full animate-float" style={{
              animationDelay: "3s"
            }}></div>
              <div className="absolute top-1/2 -right-2 sm:-right-3 md:-right-4 w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-primary rotate-45 animate-float" style={{
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
import { Code, Cog, GraduationCap, Users } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
const About = () => {
  const highlights = [{
    icon: Code,
    title: "Clean Architecture",
    description: "Scalable systems with maintainable code"
  }, {
    icon: Users,
    title: "Team Collaboration",
    description: "Working with backend, design & product teams"
  }, {
    icon: Cog,
    title: "DevOps & CI/CD",
    description: "Performance optimization & deployment pipelines"
  }];
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm <span className="text-primary font-semibold">Ashwini</span> — a Flutter & Full Stack Developer with 
                <span className="text-primary font-semibold"> 2.5+ years of experience</span> building fast, scalable apps from scratch.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in crafting clean, maintainable architecture, integrating REST APIs, and managing 
                complete mobile workflows across both frontend and backend. My passion lies in creating delightful 
                user experiences while maintaining robust, performance-optimized applications.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Education */}
            <Card className="bg-glass-bg backdrop-blur-md border-glass-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Bachelor's of Technology (CSE)
                    </h3>
                    <p className="text-muted-foreground">SR Institute of Management and Technology, July 2019 - April 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6 animate-fade-up" style={{
          animationDelay: "0.2s"
        }}>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              What I Bring to the Table
            </h3>
            
            {highlights.map((highlight, index) => <Card key={index} className="bg-glass-bg backdrop-blur-md border-glass-border hover:bg-glass-bg/80 transition-all duration-300 hover:shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/20 shrink-0">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 rounded-lg bg-primary/10 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">2.5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-accent-blue/10 border border-accent-blue/20">
                <div className="text-3xl font-bold text-accent-blue mb-2">12+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
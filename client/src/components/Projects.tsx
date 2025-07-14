import { ExternalLink, Github, Code, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const Projects = () => {
  const projects = [{
    title: "RiverXplore.in",
    description: "An AI-powered platform that generates Flutter UI code from design prompts. Features a chat-based interface with image upload capabilities and subscription management.",
    longDescription: "RiverXplore.in is a cutting-edge platform that bridges the gap between design and development. Users can upload design images or describe their UI requirements, and the AI generates clean, production-ready Flutter code. The platform includes user authentication, subscription management, and a sophisticated chat interface for seamless interaction.",
    tech: ["React.js", "Node.js", "MongoDB", "AWS EC2", "Flutter"],
    features: ["AI Prompt Creation & Sharing", "Community Voting & Feedback", "Collaborative Prompt Refinement", "Prompt Effectiveness Analytics", "Interactive Comments & Discussion"],
    demoUrl: "https://riverxplore.in",
    githubUrl: "https://github.com/ashwini-gupta1807/riverxplore",
    category: "Web Application",
    status: "Live",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
  }];
  return <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work where I've applied my skills to create impactful solutions.
          </p>
        </div>

        <div className="grid gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => <Card key={index} className="bg-background border-border hover:shadow-card transition-all duration-500 animate-fade-up overflow-hidden group">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-blue/20 z-10"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full font-medium">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      RiverXplore is a collaborative platform where you can create, share, refine, and collaborate on AI prompts. Our community helps improve prompt effectiveness through voting, commenting, and iterative enhancement.
                    </p>
                    
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </div>)}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-accent-blue" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => <span key={techIndex} className="px-3 py-1 bg-glass-bg border border-glass-border text-foreground text-sm rounded-full">
                          {tech}
                        </span>)}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="glow" className="flex-1 group" onClick={() => window.open(project.demoUrl, '_blank')}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="flex-1" onClick={() => window.open(project.githubUrl, '_blank')}>
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>)}
        </div>

        {/* More Projects Coming Soon */}
        <div className="text-center mt-16">
          <Card className="bg-glass-bg backdrop-blur-md border-glass-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                More Projects Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new and exciting projects. Stay tuned for more innovative solutions!
              </p>
              <Button variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth"
            })}>
                Get in Touch for Custom Projects
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Projects;
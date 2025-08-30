import { Code, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
const Projects = () => {
  const projects = [
    {
      title: "Rhythmiq – AI-Powered Fitness App",
      description: "Building a market-ready fitness app with step tracking, workout logging & AI workout suggestions.",
      longDescription: "Developing a comprehensive fitness application that combines AI-powered workout suggestions with comprehensive tracking features. The app includes step tracking, workout logging, run tracking, nutrition assistance, gamification elements, and a subscription model for a complete fitness experience.",
      tech: ["Flutter", "Firebase", "MongoDB", "Node.js", "Express.js", "Google Maps SDK"],
      features: ["Step Tracking", "Workout Logging", "AI Workout Suggestions", "Run Tracking", "Nutrition Assistant", "Gamification", "Subscription Model"],
      demoUrl: "https://rhythmiq-app.com",
      githubUrl: "https://github.com/ashwini-gupta1807/rhythmiq",
      category: "Mobile App",
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop"
    },
    {
      title: "RiverXplore – Collaborative AI Prompt Engineering Platform",
      description: "Built a MERN platform for creating, sharing & monetizing AI prompts.",
      longDescription: "Developed a full-stack platform using React.js with Vite for the frontend and Node.js/Express.js with MongoDB for the backend. The platform enables users to create, share, and monetize AI prompts with collaboration features including voting, comments, and iterative refinement. Includes secure APIs with authentication and role-based access control.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      features: ["AI Prompt Creation & Sharing", "Collaboration Tools", "Voting System", "Comments & Discussion", "Iterative Refinement", "Secure APIs", "Authentication & Role-based Access", "Responsive UI"],
      demoUrl: "https://riverxplore.in",
      githubUrl: "https://github.com/ashwini-gupta1807/riverxplore",
      category: "Web Application",
      status: "Not live",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
    }
  ];
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => <Card key={index} className="bg-background border-border hover:shadow-card transition-all duration-500 animate-fade-up overflow-hidden group">
              <div className="flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
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
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
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
                  <div className="mb-4">
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
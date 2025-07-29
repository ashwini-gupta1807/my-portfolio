import { Code, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
const Projects = () => {
  const projects = [
    {
      title: "FocusMate",
      description: "A cross-platform Flutter app helping users manage study, sleep, fitness, and nutrition with smart tracking and insights.",
      longDescription: "Built a comprehensive lifestyle app using Flutter, integrating multiple wellness aspects into one platform. The app helps users track their daily activities, manage workouts, monitor nutrition, and maintain healthy sleep patterns with an intuitive interface.",
      tech: ["Flutter", "MongoDB", "Node.js", "Express.js"],
      features: ["Workout Creation & Tracking", "Meal & Weight Tracking", "Study/Sleep Timers", "Calendar Progress Insights", "Cross-platform Support"],
      demoUrl: "https://focusmate-app.com",
      githubUrl: "https://github.com/ashwini-gupta1807/focusmate",
      category: "Mobile App",
      status: "Live",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      title: "Health Consultation App",
      description: "A secure healthcare platform enabling chat consultations between patients and healthcare providers.",
      longDescription: "Built a cross-platform healthcare consultation application using Flutter for the frontend and Node.js with Express.js for the backend. The app provides secure chat-based consultations with healthcare providers.",
      tech: ["Flutter", "Node.js", "Express.js", "MongoDB"],
      features: ["Secure Chat Consultations", "Cross-platform Support", "Real-time Messaging", "User Authentication", "Healthcare Provider Profiles"],
      demoUrl: "https://health-consult-demo.com",
      githubUrl: "https://github.com/ashwini-gupta1807/health-consult",
      category: "Healthcare",
      status: "Live",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
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
import { Smartphone, Globe, Database, Cloud, GitBranch, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "Firebase", "REST APIs"]
    },
    {
      icon: Globe,
      title: "Web Development", 
      skills: ["React.js", "Node.js", "MongoDB", "Express.js"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: ["Firebase", "MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      icon: GitBranch,
      title: "Version Control",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS EC2", "Docker", "CI/CD", "Linux"]
    },
    {
      icon: Zap,
      title: "Programming",
      skills: ["Java", "JavaScript", "TypeScript", "Python"]
    }
  ];

  const mainSkills = [
    { name: "Flutter", level: 90 },
    { name: "Firebase", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Java", level: 70 },
    { name: "DevOps", level: 65 }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-glass-bg backdrop-blur-md border-glass-border hover:bg-glass-bg/80 transition-all duration-300 hover:shadow-card animate-fade-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {mainSkills.map((skill, index) => (
              <div 
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${1 + index * 0.2}s` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating skill badges */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-float hidden lg:flex">
          <span className="text-primary font-bold text-sm">JS</span>
        </div>
        <div className="absolute bottom-20 right-20 w-14 h-14 bg-accent-blue/10 rounded-full flex items-center justify-center animate-float hidden lg:flex" style={{ animationDelay: "2s" }}>
          <span className="text-accent-blue font-bold text-sm">TS</span>
        </div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-accent-red/10 rounded-full flex items-center justify-center animate-float hidden lg:flex" style={{ animationDelay: "4s" }}>
          <span className="text-accent-red font-bold text-xs">AWS</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
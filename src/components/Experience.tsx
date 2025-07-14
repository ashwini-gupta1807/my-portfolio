import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Flutter Developer",
      company: "App Knit",
      location: "Remote",
      period: "Nov 2022 – Present",
      responsibilities: [
        "Built and maintained scalable mobile apps using Flutter & Firebase",
        "Integrated REST APIs and handled full mobile workflows",
        "Collaborated with cross-functional teams for shipping products from idea to production",
        "Implemented clean architecture patterns and performance optimizations",
        "Mentored junior developers and conducted code reviews"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-background border-border hover:shadow-card transition-all duration-300 animate-fade-up"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold text-lg mb-2">
                      <Briefcase className="w-5 h-5" />
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Key Responsibilities & Achievements:
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <span className="leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline decoration */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-primary via-accent-blue to-primary opacity-20 hidden lg:block"></div>
        
        {/* Timeline dots */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-glow hidden lg:block"></div>
      </div>
    </section>
  );
};

export default Experience;
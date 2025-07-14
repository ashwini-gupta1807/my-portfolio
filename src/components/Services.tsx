import { ArrowRight, Globe, Smartphone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native & cross-platform mobile app development using Flutter, Firebase, and REST APIs. From concept to App Store deployment.",
      features: [
        "Flutter & Dart Development",
        "Firebase Integration",
        "REST API Integration",
        "App Store Deployment",
        "Performance Optimization"
      ],
      color: "primary"
    },
    {
      icon: Globe,
      title: "Web Development", 
      description: "Full-stack dynamic web applications using MERN stack with clean architecture principles and modern development practices.",
      features: [
        "React.js Frontend",
        "Node.js Backend",
        "MongoDB Database",
        "AWS Cloud Deployment",
        "CI/CD Pipeline Setup"
      ],
      color: "accent-blue"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Services
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm your one-stop partner. Let's transform your vision into a fully functional product with exceptional user experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-background border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-fade-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-${service.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <h4 className="text-lg font-semibold text-foreground">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-muted-foreground">
                        <div className={`w-2 h-2 bg-${service.color} rounded-full`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-primary border-0 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your ideas and transform them into reality. I'm here to help you build amazing digital products.
              </p>
              <Button 
                variant="secondary" 
                size="xl"
                onClick={scrollToContact}
                className="group"
              >
                Let's Talk
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
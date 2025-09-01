import { Code, Coffee, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions to complex problems."
    },
    {
      icon: Coffee,
      title: "Dedication",
      description: "Committed to delivering high-quality work and continuous learning."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Building fast, optimized applications that provide excellent user experiences."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with over X years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful, and 
            intuitive solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              My journey in technology started with curiosity and grew into a deep passion for 
              creating meaningful digital experiences. I specialize in full-stack development, 
              with expertise in modern frameworks and a keen eye for design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="relative">
            <div className="card-gradient rounded-2xl p-8 shadow-medium">
              <h4 className="text-xl font-semibold mb-6">Quick Facts</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience:</span>
                  <span className="font-semibold">X+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projects Completed:</span>
                  <span className="font-semibold">50+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Coffee Consumed:</span>
                  <span className="font-semibold">∞ Cups</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-semibold">Your City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="text-center p-6 card-gradient rounded-xl shadow-soft hover:shadow-medium transition-smooth group"
            >
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
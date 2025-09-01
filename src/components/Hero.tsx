import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-5" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm{" "}
            <span className="gradient-text">Your Name</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up [animation-delay:200ms]">
            Full Stack Developer & Creative Problem Solver
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up [animation-delay:400ms]">
            I craft beautiful, functional web experiences with modern technologies. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up [animation-delay:600ms]">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('projects')}
              className="animate-float"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection('contact')}
              className="transition-smooth hover:shadow-medium"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 animate-slide-up [animation-delay:800ms]">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-soft hover:shadow-medium transition-smooth hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-soft hover:shadow-medium transition-smooth hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-card shadow-soft hover:shadow-medium transition-smooth hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full bg-card/50 backdrop-blur-sm hover:bg-card transition-smooth"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
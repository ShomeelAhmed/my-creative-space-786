import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Your City, Country",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      url: "https://github.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      url: "https://linkedin.com"
    },
    {
      icon: Mail,
      title: "Email",
      url: "mailto:your.email@example.com"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Send me a message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="transition-smooth focus:shadow-soft"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="transition-smooth focus:shadow-soft"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello!"
                  rows={6}
                  required
                  className="transition-smooth focus:shadow-soft resize-none"
                />
              </div>
              
              <Button type="submit" variant="gradient" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's connect</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels. I'm always happy to chat!
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="flex items-center gap-4 p-4 card-gradient rounded-lg shadow-soft hover:shadow-medium transition-smooth group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="pt-8 border-t border-border">
              <h4 className="text-lg font-semibold mb-4">Follow me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.title}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-smooth hover:scale-110 group"
                    title={social.title}
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
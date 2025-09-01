const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "jQuery", level: 85 },
      ]
    },
    {
      title: "UI Frameworks & Styling",
      skills: [
        { name: "Tailwind CSS", level: 95 },
        { name: "MUI", level: 90 },
        { name: "Ant Design", level: 88 },
        { name: "ShadCN", level: 85 },
        { name: "Styled Components", level: 80 },
      ]
    },
    {
      title: "Core & Management",
      skills: [
        { name: "HTML5/CSS3", level: 95 },
        { name: "Project Management", level: 90 },
        { name: "SEO Optimization", level: 88 },
        { name: "Node.js", level: 80 },
        { name: "Redux Toolkit", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="card-gradient rounded-xl p-8 shadow-soft hover:shadow-medium transition-smooth"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full hero-gradient transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 5 + skillIndex) * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center">
            {[
              "React", "Next.js", "TypeScript", "Tailwind CSS", "MUI", 
              "JavaScript", "HTML5", "CSS3", "Redux", "Node.js", "SEO"
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-smooth cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
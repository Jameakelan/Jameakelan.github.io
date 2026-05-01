import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, HeartPulse, Smartphone, Bot, Radio } from 'lucide-react';
import { projectsData } from '../data/projects';

const Projects = () => {
  const iconMap = {
    "Mobile Health": <Smartphone size={24} />,
    "Machine Learning": <HeartPulse size={24} />,
    "Research Prototype": <Bot size={24} />,
    "Software Development": <Code2 size={24} />,
    "AI Monitoring": <Radio size={24} />
  };

  return (
    <section id="projects" className="section-container relative">
      <div className="flex flex-col items-center mb-10 sm:mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          Collaborative <span className="gradient-text">Projects</span>
        </motion.h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent-secondary rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group glass-card overflow-hidden flex flex-col h-full"
          >
            <div className="p-5 sm:p-6 md:p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-5 sm:mb-6">
                <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                  {iconMap[project.category] || <Code2 size={24} />}
                </div>
                <div className="flex gap-3">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-text-primary group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 sm:mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-surface border border-glass-border text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

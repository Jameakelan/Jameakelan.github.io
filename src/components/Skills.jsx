import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Code2, Database, BrainCircuit } from 'lucide-react';
import { skillsData } from '../data/skills';

const Skills = () => {
  const iconMap = {
    "Programming & Development": <Code2 size={24} />,
    "Machine Learning & Data Analytics": <BrainCircuit size={24} />,
    "Signal & Sensor Data": <Activity size={24} />,
    "Software & Databases": <Database size={24} />
  };

  return (
    <section id="skills" className="section-container relative">
      <div className="flex flex-col items-center mb-10 sm:mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="gradient-text">Skills</span>
        </motion.h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent-secondary rounded-full" />
      </div>

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
        {skillsData.map((group, idx) => (
          <motion.article
            key={group.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            className="glass-card group p-5 sm:p-6 md:p-7 hover:bg-surface-hover hover:border-accent/30"
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-11 w-11 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-background">
                {iconMap[group.category] || <Code2 size={24} />}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
                {group.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-glass-border bg-accent/5 px-3 py-1.5 text-xs sm:text-sm font-semibold text-text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Skills;

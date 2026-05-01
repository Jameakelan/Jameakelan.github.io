import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, BookOpen, Globe } from 'lucide-react';
import { researchThemes } from '../data/research';

const Research = () => {
  const iconMap = {
    "Digital Health & AI": <Activity className="text-accent" size={32} />,
    "Biomedical Signal & Image Analysis": <Brain className="text-accent" size={32} />,
    "Health Recommender Systems": <BookOpen className="text-accent" size={32} />
  };

  return (
    <section id="research" className="section-container">
      <div className="flex flex-col items-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Research <span className="gradient-text">Themes</span>
        </motion.h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent-secondary rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {researchThemes.map((theme, idx) => (
          <motion.div
            key={theme.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-card p-8 group hover:bg-surface-hover hover:border-accent/40"
          >
            <div className="mb-6 p-4 rounded-xl bg-accent/10 w-fit group-hover:scale-110 transition-transform">
              {iconMap[theme.title] || <Globe className="text-accent" size={32} />}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent transition-colors">
              {theme.title}
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              {theme.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {theme.keywords.map((keyword, kIdx) => (
                <span 
                  key={kIdx} 
                  className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Research;

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Sparkles } from 'lucide-react';
import { awardsData } from '../data/awards';

const Awards = () => {
  return (
    <section id="awards" className="section-container relative">
      <div className="flex flex-col items-center mb-10 sm:mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          Selected <span className="gradient-text">Awards</span>
        </motion.h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent-secondary rounded-full" />
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {awardsData.map((award, idx) => (
          <motion.article
            key={award.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            className="group glass-card p-5 sm:p-6 md:p-7 hover:bg-surface-hover hover:border-accent/30"
          >
            <div className="mb-5 flex items-start justify-between gap-3 sm:gap-4">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-background">
                {idx < 2 ? <Award size={24} /> : <Sparkles size={24} />}
              </span>
              <span className="flex items-center gap-1 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                <Calendar size={12} /> {award.year}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight text-text-primary group-hover:text-accent transition-colors">
              {award.title}
            </h3>
            <p className="mt-2 text-sm md:text-base font-semibold text-text-secondary">
              {award.subtitle}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-text-muted group-hover:text-text-secondary transition-colors">
              {award.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Awards;

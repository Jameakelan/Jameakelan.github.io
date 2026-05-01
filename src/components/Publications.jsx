import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { publicationsData } from '../data/publications';

const Publications = () => {
  const sortedPublications = [...publicationsData].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <section id="publications" className="section-container relative">
      <div className="flex flex-col items-center mb-10 sm:mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="gradient-text">Publications</span>
        </motion.h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent-secondary rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-2.5 top-3 bottom-3 w-px bg-accent/70 sm:left-4 md:left-6" />

        <div className="space-y-8">
          {sortedPublications.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative pl-8 sm:pl-12 md:pl-20"
            >
              <div className="absolute left-0 top-7 h-5 w-5 rounded-full border-4 border-background bg-accent shadow-glow sm:left-1.5 md:left-3.5" />
              <div className="absolute left-10 top-10 hidden h-px w-8 bg-accent/50 md:block" />

              <div className="group glass-card p-5 sm:p-6 md:p-8 hover:bg-surface-hover hover:border-accent/30 relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        pub.status === 'Published'
                          ? 'bg-accent/10 text-accent border border-accent/20'
                          : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                      }`}>
                        {pub.status}
                      </span>
                      <span className="flex items-center gap-1 text-text-muted text-xs font-medium">
                        <Calendar size={12} /> {pub.year}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-text-primary group-hover:text-accent transition-colors leading-tight">
                      {pub.title}
                    </h3>

                    <p className="text-sm font-medium text-text-secondary mb-4 italic">
                      {pub.authors}
                    </p>

                    <div className="flex items-center gap-2 mb-6">
                      <Award size={16} className="text-accent" />
                      <span className="text-sm font-semibold text-text-muted leading-relaxed">{pub.venue}</span>
                    </div>

                    <p className="text-text-muted text-sm leading-relaxed group-hover:text-text-secondary transition-all duration-300">
                      {pub.abstract}
                    </p>
                  </div>

                  <div className="flex flex-wrap md:flex-col gap-3">
                    {Object.entries(pub.links).map(([key, url]) => (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-glass-border text-xs font-bold text-text-secondary hover:text-accent hover:border-accent/50 transition-all uppercase tracking-wider whitespace-nowrap"
                      >
                        {key} <ExternalLink size={12} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

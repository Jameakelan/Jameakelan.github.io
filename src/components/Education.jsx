import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ExternalLink, GraduationCap, MapPin, UserRound } from 'lucide-react';
import { educationData } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="section-container relative">
      <div className="flex flex-col items-center mb-10 sm:mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent-secondary rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-2.5 top-3 bottom-3 w-px bg-accent/70 sm:left-4 md:left-6" />

        <div className="space-y-8">
          {educationData.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative pl-8 sm:pl-12 md:pl-20"
            >
              <div className="absolute left-0 top-7 h-5 w-5 rounded-full border-4 border-background bg-accent shadow-glow sm:left-1.5 md:left-3.5" />
              <div className="absolute left-10 top-10 hidden h-px w-8 bg-accent/50 md:block" />

              <div className="group glass-card p-5 sm:p-6 md:p-8 hover:bg-surface-hover hover:border-accent/30">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                    <span className="flex h-11 w-11 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-accent text-background">
                      <GraduationCap size={24} />
                    </span>
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-1 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                          <Calendar size={12} /> {item.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-medium text-text-muted">
                          <MapPin size={13} /> {item.location}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight text-text-primary group-hover:text-accent transition-colors">
                        {item.degree}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-text-secondary">
                        {item.institution}, {item.location}
                      </p>

                      {item.thesisTitle && (
                        <div className="mt-5 rounded-xl border border-glass-border bg-accent/5 p-4">
                          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-muted">
                            <BookOpen size={14} className="text-accent" />
                            Thesis Title
                          </div>
                          <p className="text-sm md:text-base font-medium leading-relaxed text-text-secondary">
                            {item.thesisTitle}
                          </p>
                        </div>
                      )}

                      {item.supervisors.length > 0 && (
                        <div className="mt-5">
                          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-muted">
                            <UserRound size={14} className="text-accent" />
                            Supervisor{item.supervisors.length > 1 ? 's' : ''}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.supervisors.map((supervisor) => (
                              <a
                                key={supervisor.url}
                                href={supervisor.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full border border-glass-border bg-accent/5 px-3 py-1.5 text-sm font-semibold text-text-secondary transition-all hover:border-accent/50 hover:text-accent"
                              >
                                {supervisor.name}
                                <ExternalLink size={12} />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {item.highlights.length > 0 && (
                  <ul className="mt-6 space-y-2 sm:pl-[64px] md:pl-[76px] text-sm md:text-base font-medium text-text-muted">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

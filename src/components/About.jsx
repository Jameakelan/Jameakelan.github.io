import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  BrainCircuit,
  Cpu,
  HeartPulse,
  Radio,
  Sparkles,
  Target,
  TrendingUp
} from 'lucide-react';
import { profileData } from '../data/profile';

const About = () => {
  const interestIcons = [
    <HeartPulse size={22} />,
    <BrainCircuit size={22} />,
    <Radio size={22} />,
    <TrendingUp size={22} />,
    <Cpu size={22} />,
    <Activity size={22} />,
    <Sparkles size={22} />
  ];

  return (
    <section id="about" className="section-container relative">
      <div className="flex flex-col items-center mb-10 sm:mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          Research <span className="gradient-text">Interests</span>
        </motion.h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent-secondary rounded-full" />
      </div>
      
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {profileData.researchInterests.map((interest, idx) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="glass-card group min-h-30 sm:min-h-36 p-5 sm:p-6 flex flex-col justify-between hover:bg-surface-hover hover:border-accent/35"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-accent text-background transition-transform duration-300 group-hover:scale-105">
                      {interestIcons[idx] || <Target size={22} />}
                    </span>
                    <span className="text-sm font-semibold text-text-muted">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-5 sm:mt-6 text-base sm:text-lg font-semibold leading-snug text-text-primary">
                    {interest}
                  </p>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

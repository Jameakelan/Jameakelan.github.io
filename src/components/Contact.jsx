import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, GraduationCap, Link2, Download, Send } from 'lucide-react';
import { linksData } from '../data/links';

const Contact = () => {
  const socials = [
    { name: 'Google Scholar', href: linksData.googleScholar, icon: <GraduationCap size={24} /> },
    { name: 'GitHub', href: linksData.github, icon: <Github size={24} /> },
    { name: 'LinkedIn', href: linksData.linkedin, icon: <Linkedin size={24} /> },
    { name: 'ORCID', href: linksData.orcid, icon: <Link2 size={24} /> }
  ].filter((social) => Boolean(social.href));

  return (
    <section id="contact" className="section-container">
      <div className="flex flex-col items-center mb-10 sm:mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent-secondary rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-8 md:p-12 text-center mb-8 sm:mb-12"
        >
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            I am always open to discussing research collaborations, innovative projects, or sharing insights in the field of digital health and AI.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
            <a 
              href={`mailto:${linksData.email}`}
              className="btn-primary flex items-center justify-center gap-3 text-sm sm:text-base md:text-lg py-3.5 sm:py-4 px-6 sm:px-10"
            >
              <Send size={20} /> Email Me
            </a>
            <a 
              href={linksData.cv}
              download="ak_ananyot_keawlamoon_academic_cv.pdf"
              className="btn-secondary flex items-center justify-center gap-3 text-sm sm:text-base md:text-lg py-3.5 sm:py-4 px-6 sm:px-10"
            >
              <Download size={20} /> Download CV
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {socials.map((social, idx) => (
            <motion.a 
              key={social.name}
              href={social.href}
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-4 sm:p-6 flex flex-col items-center gap-3 sm:gap-4 hover:bg-surface-hover hover:border-accent/40 group transition-all"
            >
              <div className="text-text-muted group-hover:text-accent transition-colors">
                {social.icon}
              </div>
              <span className="text-[11px] sm:text-sm text-center font-bold text-text-secondary group-hover:text-text-primary uppercase tracking-wider">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

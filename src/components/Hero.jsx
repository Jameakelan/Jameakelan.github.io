import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { profileData } from '../data/profile';
import { linksData } from '../data/links';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-5 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-[11px] sm:text-sm font-semibold tracking-wide uppercase"
        >
          Available for collaborations
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight mb-5 sm:mb-6 leading-[1.08]"
        >
          Hi, I'm <span className="gradient-text">{profileData.name.split(' ')[0]}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl text-text-secondary font-medium mb-6 sm:mb-8 max-w-3xl mx-auto"
        >
          {profileData.title}
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto mb-9 sm:mb-12 leading-relaxed"
        >
          {profileData.tagline}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5"
        >
          <a href="#about" className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base">
            View Research Interests <ArrowRight size={18} />
          </a>
          <a href={linksData.cv} download="ak_ananyot_keawlamoon_academic_cv.pdf" className="btn-secondary flex items-center justify-center gap-2 text-sm sm:text-base">
            Download CV <Download size={18} />
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

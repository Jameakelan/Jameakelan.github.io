import React from 'react';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';
import { footerData, linksData } from '../data/links';
import { profileData } from '../data/profile';

const Footer = () => {
  return (
    <footer className="bg-surface py-10 sm:py-16 border-t border-glass-border">
      <div className="section-container !py-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">{profileData.name}</h3>
            <p className="text-text-secondary text-sm max-w-xs">{footerData.tagline}</p>
          </div>
          
          <div className="flex gap-8">
            <a href={linksData.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-all transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href={linksData.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-all transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${linksData.email}`} className="text-text-muted hover:text-accent transition-all transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-10 sm:mt-16 pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-6 text-center md:text-left">
          <p className="text-[11px] sm:text-xs text-text-muted font-medium tracking-wide uppercase">
            {footerData.copyright}
          </p>
          <p className="text-[11px] sm:text-xs text-text-muted flex items-center gap-1 font-medium italic">
            Built with <Heart size={10} className="text-accent fill-accent" /> for Digital Health
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

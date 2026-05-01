import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Publications', href: '#publications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "glass-nav h-16" : "bg-transparent h-20"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-shrink-0 font-bold text-lg sm:text-xl tracking-tight"
        >
          <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="gradient-text">
            {profileData.name}
          </a>
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-text-secondary hover:text-accent transition-colors text-sm font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="flex items-center gap-1 px-5 py-2 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-all text-sm font-semibold"
          >
            Let's Talk <ArrowUpRight size={14} />
          </motion.a>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-primary p-2 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-nav overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-5 flex flex-col space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-text-secondary hover:text-accent block py-3 text-base font-medium border-b border-glass-border"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

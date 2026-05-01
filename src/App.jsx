import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Awards from './components/Awards';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="bg-background text-text-primary min-h-screen selection:bg-accent/30 selection:text-accent">
      <Navbar />
      <AnimatePresence mode="wait">
        <main>
          <Hero />
          <About />
          <Education />
          <WorkExperience />
          <Publications />
          <Projects />
          <Awards />
          <Skills />
          <Contact />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;

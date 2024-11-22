import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16 space-y-32">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-gray-900 py-8 mt-32">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 谷津帆乃果. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
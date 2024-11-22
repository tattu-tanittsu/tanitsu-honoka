import React from 'react';
import { Mail, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="pt-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Contact
        </h2>

        <div className="bg-gray-800/50 p-6 rounded-lg">
          <div className="space-y-4">
            <a
              href="mailto:htanitsu1108@gmail.com"
              className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
              <span>htanitsu1108@gmail.com</span>
            </a>
            
            <a
              href="https://github.com/tattu-tanittsu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
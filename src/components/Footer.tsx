import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://github.com/ludovic-domingues" target="_blank" rel="noopener noreferrer" 
             className="hover:text-indigo-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ludovicdomingues/" target="_blank" rel="noopener noreferrer"
             className="hover:text-indigo-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@ludovic-domingues.com"
             className="hover:text-indigo-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-gray-400">© {new Date().getFullYear()} Ludovic DOMINGUES. All rights reserved.</p>
      </div>
    </footer>
  );
}
import React from 'react';
import { Heart, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for job seekers worldwide</span>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-gray-500">
            © 2025 ResumeAI. Helping you land your dream job.
          </p>
        </div>
      </div>
    </footer>
  );
};
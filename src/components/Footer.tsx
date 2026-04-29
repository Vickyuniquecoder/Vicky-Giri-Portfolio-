import React from 'react';
import { Github, Linkedin, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8 text-center text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 p-[1px]">
            <div className="w-full h-full bg-[#0a0a0a] rounded-lg flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
              <Code2 className="w-4 h-4 text-white" />
            </div>
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-white">VG</span>
        </div>

        <p className="text-gray-500 font-light">
          &copy; {new Date().getFullYear()} Vicky Giri. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        
      </div>
    </footer>
  );
}

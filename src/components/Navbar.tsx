import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.name.toLowerCase());
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group z-50">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 p-[1px]">
            <div className="w-full h-full bg-[#0a0a0a] rounded-xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
              <Code2 className="w-5 h-5 text-white" />
            </div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">VG</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                activeSection === link.name.toLowerCase()
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {link.name}
              {activeSection === link.name.toLowerCase() && (
                <motion.div
                  layoutId="active-nav"
                  className="h-px bg-gradient-to-r from-purple-500 to-blue-500 mt-1"
                />
              )}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 rounded-full text-sm font-medium border border-gray-700 hover:border-gray-500 bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden z-50 text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-2 transition-colors duration-200 ${
                  activeSection === link.name.toLowerCase()
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

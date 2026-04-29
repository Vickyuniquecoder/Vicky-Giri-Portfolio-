import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="flex flex-col items-start pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono text-gray-300">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6"
          >
            Hi, I'm <br />
            <span className="text-gradient">Vicky Giri</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 font-medium mb-4"
          >
            Backend Developer & Automation Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light"
          >
            Building scalable backend systems & intelligent automation solutions. Helping businesses streamline their process with powerful APIs and data management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-8 py-4 rounded-full border border-gray-700 bg-transparent text-white font-medium hover:bg-white/5 transition-colors duration-300 flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-gray-300 font-medium hover:bg-white/10 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right side graphical element representing backend/automation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-[40px] blur-3xl" />
          <div className="relative glass p-8 rounded-[32px] overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <Terminal className="w-5 h-5 text-gray-500" />
            </div>
            <div className="space-y-4 font-mono text-sm text-gray-300">
              <p><span className="text-blue-400">const</span> <span className="text-yellow-200">vicky</span> = {'{'}</p>
              <p className="pl-4">role: <span className="text-green-300">'Backend Engineer'</span>,</p>
              <p className="pl-4">skills: [<span className="text-green-300">'Node.js'</span>, <span className="text-green-300">'FastAPI'</span>, <span className="text-green-300">'Python'</span>],</p>
              <p className="pl-4">automation: <span className="text-purple-400">true</span>,</p>
              <p className="pl-4">buildScalableSystems: <span className="text-blue-400">async</span> () ={'>'} {'{'}</p>
              <p className="pl-8 text-gray-500">// Turning coffee into robust APIs</p>
              <p className="pl-8"><span className="text-purple-400">await</span> workMagic();</p>
              <p className="pl-4">{'}'}</p>
              <p>{'};'}</p>
              <p className="mt-4"><span className="text-blue-400">vicky</span>.buildScalableSystems();</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

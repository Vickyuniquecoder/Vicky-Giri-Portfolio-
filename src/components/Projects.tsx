import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Database, Play, Briefcase } from 'lucide-react';

const projects = [
  {
    id: 'expense-tracker',
    title: 'Expenses Tracker System',
    description: 'A hierarchy-based company expense management system supporting Employee, Manager, and Admin levels. It centralizes company expense overview and handles role-based tracking & approvals.',
    tech: ['Python', 'FastAPI', 'MongoDB', 'React'],
    impact: 'Improved financial transparency and control across 3 organizational tiers.',
    icon: <Database className="w-6 h-6 text-purple-400" />,
    color: 'from-purple-500/20 to-transparent',
    border: 'group-hover:border-purple-500/50'
  },
  {
    id: 'interview-manager',
    title: 'Interview Management System',
    description: 'A comprehensive backend system designed to manage complex interview workflows, track candidate data, handle dynamic scheduling, and maintain a real-time status tracking system.',
    tech: ['Express.js', 'Node.js', 'MongoDB', 'Redis'],
    impact: 'Streamlined the hiring process, reducing manual tracking work by 60%.',
    icon: <Briefcase className="w-6 h-6 text-blue-400" />,
    color: 'from-blue-500/20 to-transparent',
    border: 'group-hover:border-blue-500/50'
  },
  {
    id: 'law-firm-automation',
    title: 'Law Firm Automation System',
    description: 'Automated backend workflows for legal operations utilizing intelligent agents and webhooks. It automates task management and reduces manual, repetitive legal documentation processes.',
    tech: ['n8n', 'Node.js', 'AI Agents', 'PostgreSQL'],
    impact: 'Saved 20+ hours per week per employee by increasing operational efficiency.',
    icon: <Play className="w-6 h-6 text-green-400" />,
    color: 'from-green-500/20 to-transparent',
    border: 'group-hover:border-green-500/50'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-sm font-mono text-purple-400 tracking-wider uppercase mb-2">Portfolio</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold">Featured Projects</h3>
            </div>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <span>View Github</span>
              <Github className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className={`group relative glass rounded-[2rem] overflow-hidden transition-all duration-500 border border-white/5 ${project.border} hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer flex flex-col h-full`}
            >
              {/* Top ambient gradient */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${project.color} opacity-50`} />
              
              <div className="p-8 relative z-10 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center shadow-inner">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
                      <Github className="w-4 h-4 text-gray-300" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
                      <ExternalLink className="w-4 h-4 text-gray-300" />
                    </button>
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {project.title}
                </h4>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="space-y-4 mt-auto">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-mono text-gray-500 block mb-2">Impact</span>
                    <p className="text-sm text-gray-300 font-medium border-l-2 border-purple-500/50 pl-3">
                      {project.impact}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

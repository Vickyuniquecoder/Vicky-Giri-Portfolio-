import React from 'react';
import { motion } from 'motion/react';
import { Database, LayoutTemplate, Settings, ShieldCheck, Terminal, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend Development',
    icon: <Terminal className="w-6 h-6 text-blue-400" />,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 85 },
      { name: 'FastAPI', level: 80 },
      { name: 'Python', level: 85 },
      { name: 'REST APIs', level: 95 },
    ]
  },
  {
    title: 'Database & Storage',
    icon: <Database className="w-6 h-6 text-purple-400" />,
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'NoSQL Systems', level: 88 },
      { name: 'Query Optimization', level: 80 },
    ]
  },
  {
    title: 'Automation & AI',
    icon: <Cpu className="w-6 h-6 text-green-400" />,
    skills: [
      { name: 'n8n Automation', level: 95 },
      { name: 'AI Agents', level: 85 },
      { name: 'RAG Systems', level: 80 },
      { name: 'Workflow Design', level: 90 },
    ]
  }
];

const otherSkills = [
  'Authentication & Authorization', 'API Integration', 'CI/CD & Deployment', 
  'Testing', 'Problem-solving & Critical Thinking', 'Microservices', 'Docker'
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 md:text-center"
        >
          <h2 className="text-sm font-mono text-blue-400 tracking-wider uppercase mb-2">Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold">Skills & Technologies</h3>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h4 className="text-xl font-medium text-white">{category.title}</h4>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl"
        >
          <div className="flex items-center gap-4 w-full md:w-auto">
            <ShieldCheck className="w-8 h-8 text-yellow-500 shrink-0" />
            <h4 className="text-lg font-medium text-white whitespace-nowrap">Core Competencies</h4>
          </div>
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-gray-700 bg-black/50 text-sm text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

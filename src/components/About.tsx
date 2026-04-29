import React from 'react';
import { motion } from 'motion/react';
import { Code2, Server, Workflow, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-purple-400 tracking-wider uppercase mb-2">About Me</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold">Engineering Efficiency.</h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 text-gray-300 leading-relaxed font-light text-lg"
          >
            <p>
              I am a Backend Developer and Automation Engineer with a passion for designing scalable APIs, robust database systems, and intelligent workflows.
            </p>
            <p>
              My career journey started with a <strong className="text-white font-medium">B.Tech in Computer Science</strong>, which built a strong foundation in computer engineering. I then transitioned into a <strong className="text-white font-medium">Backend Developer</strong> role at Uminber Designs, where I honed my skills in Node.js, Express, and database management. 
            </p>
            <p>
              Today, I operate at the intersection of backend engineering and workflow automation as an <strong className="text-white font-medium">Automation Engineer</strong>, utilizing tools like n8n and exploring AI agents and RAG systems to reduce manual repetitive processes and save valuable time.
            </p>

            <div className="pt-6">
              <h4 className="text-white font-medium mb-4 text-xl">Why Hire Me?</h4>
              <ul className="space-y-3">
                {[
                  'Real production experience in backend architecture',
                  'Strong combination of backend development & systems automation',
                  'Laser focus on efficiency, scalability, and code maintainability'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Cards showcasing strengths */}
          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-6 rounded-2xl flex items-start gap-5 hover:bg-white/5 transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center shrink-0 bg-black/50">
                <Server className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-white mb-2">Clean Architecture</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  Designing maintainable, scalable, and modular backend systems that grow with the business needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass p-6 rounded-2xl flex items-start gap-5 hover:bg-white/5 transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center shrink-0 bg-black/50">
                <Code2 className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-white mb-2">Performance Optimization</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  Writing optimized database queries and crafting efficient API endpoints to ensure low latency and high throughput.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass p-6 rounded-2xl flex items-start gap-5 hover:bg-white/5 transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center shrink-0 bg-black/50">
                <Workflow className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-white mb-2">Automation Mindset</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  Integrating AI agents, RAG systems, and workflow automation (n8n) to eliminate repetitive tasks.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

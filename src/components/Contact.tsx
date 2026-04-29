import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Github, Linkedin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-mono text-blue-400 tracking-wider uppercase mb-2">Get In Touch</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                Let's build <br />
                <span className="text-gradient">something great.</span>
              </h3>
              <p className="text-gray-400 text-lg font-light max-w-md">
                Looking to automate your workflows or build robust backend architectures? I'm open to full-time roles, freelance projects, and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:vickypandit3214@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-mono">Email</p>
                  <p className="text-lg text-gray-200 group-hover:text-white transition-colors">vickypandit3214@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+918449170024" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-mono">Phone</p>
                  <p className="text-lg text-gray-200 group-hover:text-white transition-colors">+91 8449 1700 24</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-mono">Location</p>
                  <p className="text-lg text-gray-200">Ahmedabad, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://wa.me/918449170024" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] text-white flex items-center gap-2 font-medium hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Me
              </a>
              <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                Hire Me
              </button>
            </div>
          </motion.div>

          {/* Right side form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-[2rem] relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">First Name</label>
                  <input 
                    type="text" 
                    placeholder="John"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-light"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-light"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-light resize-none"
                />
              </div>

              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

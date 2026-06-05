import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Server, Database, Cloud, Palette } from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend',
    icon: <Code2 size={24} />,
    skills: ['React.js', 'Next.js', 'Redux', 'JavaScript (ES6+)', 'HTML5', 'CSS3']
  },
  {
    title: 'ERP & CMS',
    icon: <Globe size={24} />,
    skills: ['Odoo', 'WordPress', 'QWeb', 'XML Views']
  },
  {
    title: 'Backend & Data',
    icon: <Server size={24} />,
    skills: ['Django', 'Python', 'MySQL', 'PostgreSQL']
  },
  {
    title: 'Tools & Cloud',
    icon: <Cloud size={24} />,
    skills: ['Git/GitHub', 'Docker', 'AWS', 'Linux (Ubuntu)']
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="text-center mb-8" style={{ fontSize: '2.5rem' }}>Technical <span className="gradient-text">Expertise</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6"
            style={{ padding: '24px' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full" style={{ background: 'var(--primary-glow)', color: 'var(--primary-color)' }}>
                {group.icon}
              </div>
              <h3 className="text-xl font-bold">{group.title}</h3>
            </div>
            <div className="flex gap-2 flex-nowrap overflow-x-auto pb-2" style={{ gap: '10px' }}>
              {group.skills.map((skill, i) => (
                <span key={i} className="skill-tag glass-card">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

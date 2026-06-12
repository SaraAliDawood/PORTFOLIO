import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Arab Security Group',
    role: 'Junior Front-End Developer',
    period: 'Mar 2025 – Present',
    description: [
      'Customized Odoo modules (Sales, Website, HR) to fit business workflows.',
      'Built custom gym management module.',
      'Implemented access controls (ACLs, Record Rules) for secure data management.'
    ]
  },
  {
    company: 'StoreUs (Prime Signature)',
    role: 'Junior Front-End Developer',
    period: 'Mar 2024 – Feb 2025',
    description: [
      'Reduced average page load time by 80% and improved user retention by 60%.',
      'Developed wholesale purchasing flow that increased bulk order efficiency by 40%.',
      'Implemented secure token-based authentication for 10,000+ active users.'
    ]
  },
  {
    company: 'iSchool',
    role: 'AI Coding Instructor',
    period: 'Feb 2025 – Apr 2025',
    description: [
      'Delivered coding lessons to 200+ students (ages 8–15).',
      'Improved average problem-solving scores by 30%.'
    ]
  },
  {
    company: 'Matrix Clouds',
    role: 'Front-End Developer',
    period: 'Previous',
    description: [
      'Engineered the front-end of Elite Academy using React + Context.',
      'Implemented dynamic content, user dashboards, and video streaming features.'
    ]
  },
  {
    company: 'Freelance / Independent',
    role: 'Full-Stack Odoo Developer',
    period: 'Recent Project',
    description: [
      'Developed a full-stack Odoo 18 diet subscription platform connecting a B2C customer portal with ERP backend operations.',
      'Built customer-facing flows for onboarding, WhatsApp verification, meal selection, renewals, and checkout.',
      'Engineered backend business logic using Python, Odoo ORM, workflow rules, and automated notifications.',
      'Developed responsive QWeb templates, OWL components, and dynamic CMS sections including a real-time calendar.',
      'Integrated EvolutionAPI for WhatsApp, payment gateways, and REST APIs.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="text-center mb-8" style={{ fontSize: '2.5rem' }}>Professional <span className="gradient-text">Journey</span></h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="timeline-item"
          >
            <div className="glass-card timeline-content">
              <div className="timeline-date">{exp.period}</div>
              <h3 className="project-title">{exp.role}</h3>
              <div className="text-primary mb-2" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>{exp.company}</div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted" style={{ marginBottom: '8px', position: 'relative', paddingLeft: '20px' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

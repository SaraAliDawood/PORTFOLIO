import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Paymob',
    role: 'Frontend Developer',
    period: 'Mar 2025 – Present',
    description: [
      'Build React-based checkout and dashboard screens with clear success / failure / pending states, validation and friendly error handling.',
      'Develop merchant-portal and POS dashboards — API-driven transaction tables, advanced filters, status badges and reports.',
      'Integrate frontend screens with REST APIs and secure token-based flows, validating responses and edge cases with backend and QA teams.',
      'Implement reliable UI states for data-heavy products — loading, empty, validation errors, retry actions and protected routes.'
    ]
  },
  {
    company: 'StoreUs (Prime Signature)',
    role: 'Full-Stack Web Developer',
    period: 'Mar 2024 – Feb 2025',
    description: [
      'Built B2C and B2B e-commerce platforms with React.js, Next.js, TypeScript-ready components, Redux Toolkit, MUI and REST APIs — product listing, cart, checkout, authentication and delivery flows.',
      'Reduced average page load time by up to 80% and improved user retention by ~60% through cleaner state management, memoization and fewer unnecessary re-renders.',
      'Implemented secure token-based authentication and cart-migration flows for returning users across sessions and devices.',
      'Developed wholesale purchasing features for B2B clients including carton/box quantity logic and bulk-ordering flows.'
    ]
  },
  {
    company: 'Arab Security Group',
    role: 'Full-Stack Developer — ERP',
    period: 'Apr 2023 – Feb 2024',
    description: [
      'Customized Odoo (Sales, Website, HR and internal modules) with Python, XML views, QWeb, ORM methods, ACLs and record rules to fit real business workflows.',
      'Built backend business logic for a gym management system — members, subscriptions, sessions, role-based permissions, validations and reporting-ready data.',
      'Integrated Odoo with external systems, validating request/response data and maintaining reliable end-to-end journeys.',
      'Delivered across frontend screens, backend Python logic and database-backed ERP flows — from requirements through testing and deployment.'
    ]
  },
  {
    company: 'iSchool',
    role: 'AI Coding Instructor',
    period: 'Feb 2025 – Apr 2025',
    description: [
      'Delivered coding and logic lessons to 200+ students, strengthening debugging, explanation and problem-solving skills.',
      'Reviewed student code and guided learners through structured JavaScript/Python problem-solving.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="text-center mb-8" style={{ fontSize: 'clamp(1.6rem, 6vw, 2.5rem)' }}>Professional <span className="gradient-text">Journey</span></h2>
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

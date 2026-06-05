import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  {
    title: 'StoreUs Ecommerce',
    desc: 'Major UAE B2C platform handling high traffic and optimized for conversions.',
    image: '/storeus.png',
    link: 'https://storeus.com/',
    tags: ['React', 'Redux', 'MUI']
  },
  {
    title: 'StoreUs Gomla',
    desc: 'Strategic B2B wholesale platform for the Egyptian market with bulk features.',
    image: '/gomla.png',
    link: 'https://eg.storeus.com/ar/',
    tags: ['B2B', 'Ecommerce', 'React']
  },
  {
    title: 'Elite Academy',
    desc: 'Comprehensive E-learning portal with student dashboards and video courses.',
    image: '/elite.png',
    link: 'https://ieatd.com/',
    tags: ['Next.js', 'E-learning']
  },
  {
    title: 'DevFolio',
    desc: 'Modern architectural developer portfolio designed for performance and scale.',
    image: '/devfolio.png',
    link: 'https://saraalidawood.github.io/Devolio-Portfolio-Page/',
    tags: ['HTML', 'CSS', 'JS']
  },
  {
    title: 'Neurotech',
    desc: 'Advanced AI and Data Science training platform for neural tech solutions.',
    image: '/neurotech.png',
    link: 'https://neurotecheg.com/',
    tags: ['Front-End', 'Branding']
  },
  {
    title: 'DishesnMore',
    desc: 'High-end e-commerce experience for Turkish porcelain and houseware.',
    image: '/dishes.png',
    link: 'https://www.dishesnmore.com/',
    tags: ['React', 'WordPress']
  },
  {
    title: 'Coaching personality',
    desc: 'Expert assessment and coaching portal with custom integration logic.',
    image: '/hero_bg.png',
    link: 'https://www.linkedin.com/posts/sara-dawood17_%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D9%84%D9%84%D9%87-repo-httpslnkdindpeguvtw-activity-7327474442022924288-aQ7U/',
    tags: ['PHP', 'WordPress', 'React']
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ maxWidth: '100%', paddingLeft: 0, paddingRight: 0 }}>
      <h2 className="text-center mb-8" style={{ fontSize: '2.5rem' }}>Full Project <span className="gradient-text">Portfolio</span></h2>
      <div className="px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} style={{ height: 'auto' }}>
              <motion.a 
                href={project.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -10 }}
                className="glass-card project-card flex flex-col h-full"
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-info flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="project-title" style={{ margin: 0 }}>{project.title}</h3>
                    <ExternalLink size={18} className="text-muted" />
                  </div>
                  <p className="project-desc flex-grow">{project.desc}</p>
                  <div className="flex gap-2 flex-wrap mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="skill-tag glass-card" style={{ padding: '4px 10px', fontSize: '0.7rem' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;

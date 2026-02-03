import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Brink Home Assistant Integration',
      description:
        'Home Assistant integration for Brink ventilation systems featuring OAuth2 authentication and full API v1.1 support for smart home automation.',
      tech: ['Python', 'Home Assistant', 'OAuth2', 'API Integration'],
      github: 'https://github.com/yunusdemir/brink-home-assistant-v1.1',
      demo: 'https://github.com/yunusdemir/brink-home-assistant-v1.1',
    },
    {
      title: 'Hestia',
      description:
        'Automated real estate scraper that monitors rental listing websites for new properties, helping users find their next home efficiently.',
      tech: ['Python', 'Web Scraping', 'Automation'],
      github: 'https://github.com/yunusdemir/hestia',
      demo: 'https://github.com/yunusdemir/hestia',
    },
    {
      title: 'Shopify Plugin Administration',
      description:
        'Administration tool for managing Shopify plugins with a comprehensive dashboard built using Django and modern Python best practices.',
      tech: ['Python', 'Django', 'HTML', 'Docker'],
      github: 'https://github.com/yunusdemir/shopify-plugin-administration',
      demo: 'https://github.com/yunusdemir/shopify-plugin-administration',
    },
    {
      title: 'Bachelor Thesis Research',
      description:
        'Research project analyzing the Dutch Freedom of Information Act (Wob-verzoek) using data science and machine learning techniques.',
      tech: ['Python', 'Jupyter', 'Data Analysis', 'LaTeX'],
      github: 'https://github.com/yunusdemir/Scriptie',
      demo: 'https://github.com/yunusdemir/Scriptie',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full mx-auto mt-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all group"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      className="text-slate-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="text-slate-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <p className="text-slate-400 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

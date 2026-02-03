import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Hello! I'm Yunus, a passionate Full-Stack Developer with a love for creating
                elegant solutions to complex problems. My journey in web development started
                several years ago, and I've been constantly learning and evolving ever since.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I specialize in building modern, responsive web applications using cutting-edge
                technologies. From crafting intuitive user interfaces to architecting robust
                backend systems, I enjoy every aspect of the development process.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient">Quick Facts</h3>
              <div className="space-y-4">
                {[
                  { label: 'Location', value: 'Netherlands' },
                  { label: 'Experience', value: 'Full-Stack Development' },
                  { label: 'Focus', value: 'Cloud & Automation' },
                  { label: 'Interests', value: 'Smart Home, DevOps, Data Science' },
                ].map((fact, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between items-center border-b border-white/10 pb-3"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-slate-400">{fact.label}</span>
                    <span className="text-white font-medium">{fact.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={itemVariants}>
          <motion.span
            className="inline-block text-primary-400 text-sm sm:text-base font-medium mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hi, my name is
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="text-gradient">Yunus Demir</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-400 mb-6"
        >
          Full-Stack Developer
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12"
        >
          I build exceptional digital experiences that combine beautiful design
          with powerful functionality. Specializing in modern web technologies
          and creating seamless user experiences.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center">
          <motion.a
            href="#projects"
            className="px-8 py-3 glass rounded-lg text-white font-medium hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#about"
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg text-white font-medium"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(168, 85, 247, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <motion.a
            href="#about"
            className="inline-block text-slate-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown size={32} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

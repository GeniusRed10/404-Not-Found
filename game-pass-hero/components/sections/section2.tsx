"use client"

import { motion } from "framer-motion"
import { Code, Layers, Lightbulb, Zap } from "lucide-react"

const services = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Creative Design",
    description: "Innovative design solutions that captivate and engage your audience.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies.",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "3D Visualization",
    description: "Immersive 3D experiences that bring your ideas to life.",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Motion Graphics",
    description: "Dynamic animations that tell your story with impact.",
    color: "from-purple-400 to-pink-500",
  },
]

export default function Section2() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <div className="container mx-auto px-6 h-full flex items-center">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-medium text-white/70 mb-2">WHAT WE DO</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all group"
            >
              <div
                className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${service.color}`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all">
            View All Services
          </button>
        </motion.div>
      </div>
    </div>
  )
}


"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Section1() {
  return (
    <div className="container mx-auto px-6 h-full flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-2 text-sm font-medium text-white/70"
          >
            WELCOME TO HORIZON
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Immersive</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Digital Experiences
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-white/80 mb-8 max-w-lg"
          >
            We create cutting-edge digital solutions that blend technology and creativity to deliver unforgettable user
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all">
              Learn More
            </button>
          </motion.div>
        </div>

        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            className="relative w-full max-w-md aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">360°</div>
                <div className="text-xl font-medium">Immersive Experiences</div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
              }}
              className="absolute top-10 right-10 w-16 h-16 bg-blue-500/30 backdrop-blur-md rounded-full"
            ></motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -8, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 6,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-10 left-10 w-20 h-20 bg-purple-500/30 backdrop-blur-md rounded-full"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}


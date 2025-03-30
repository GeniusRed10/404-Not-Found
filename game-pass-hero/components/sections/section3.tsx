"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Virtual Reality Experience",
    category: "3D Visualization",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Brand Identity Design",
    category: "Creative Design",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Product Animation",
    category: "Motion Graphics",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function Section3() {
  return (
    <div className="container mx-auto px-6 h-full flex items-center">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-medium text-white/70 mb-2">OUR WORK</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Explore our portfolio of innovative digital solutions that have helped our clients achieve their goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + 0.2 * index }}
                  className="absolute bottom-0 left-0 p-6 w-full"
                >
                  <div className="text-sm font-medium text-blue-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">{project.title}</h3>

                  <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300">
                    <p className="text-white/80 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia.
                    </p>
                    <button className="mt-4 px-4 py-2 bg-blue-500/80 rounded-lg text-sm font-medium hover:bg-blue-600/80 transition-colors">
                      View Project
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all">
            View All Projects
          </button>
        </motion.div>
      </div>
    </div>
  )
}


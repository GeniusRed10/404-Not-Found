"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

// Netlify-themed esports games
const netlifyGames = [
  {
    id: 1,
    title: "Deployment Defenders",
    description: "Protect your web assets from attacks in this strategic tower defense game",
    image: "/images/deployment-defenders.png",
    color: "from-blue-500/40 to-green-500/40",
  },
  {
    id: 2,
    title: "Serverless Showdown",
    description: "Compete in function-based battles with zero infrastructure management",
    image: "/images/serverless-showdown.png",
    color: "from-purple-500/40 to-blue-500/40",
  },
  {
    id: 3,
    title: "CI/CD Champions",
    description: "Race to deploy code through pipelines in this fast-paced competition",
    image: "/images/cicd-champions.png",
    color: "from-green-500/40 to-teal-500/40",
  },
  {
    id: 4,
    title: "JAMstack Jousters",
    description: "Build the fastest static sites in this head-to-head web development tournament",
    image: "/images/jamstack-jousters.png",
    color: "from-red-500/40 to-orange-500/40",
  },
]

export default function NetlifyEsports() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  // Auto-rotate featured game
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % netlifyGames.length)
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const activeGame = netlifyGames[activeIndex]

  return (
    <div className="relative">
      <motion.div
        className="grid grid-cols-2 gap-2 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Featured Game - Larger */}
        <motion.div
          className="col-span-2 relative"
          variants={itemVariants}
          key={`main-${activeIndex}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-video overflow-hidden rounded-sm">
            <div className={`absolute inset-0 bg-gradient-to-br ${activeGame.color} mix-blend-overlay`}></div>
            <Image
              src={activeGame.image || "/placeholder.svg"}
              alt={activeGame.title}
              width={700}
              height={400}
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <h3 className="text-xl font-bold text-shadow-lg">{activeGame.title}</h3>
              <p className="text-sm text-gray-200 text-shadow">{activeGame.description}</p>
            </div>

            {/* Animated overlay effect */}
            <div className="absolute inset-0 border-2 border-white/0 hover:border-white/30 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>

        {/* Smaller Game Thumbnails */}
        {netlifyGames.map(
          (game, index) =>
            index !== activeIndex && (
              <motion.div
                key={`thumb-${game.id}`}
                className="relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                onClick={() => setActiveIndex(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${game.color} mix-blend-overlay`}></div>
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  width={400}
                  height={300}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 p-2">
                  <h4 className="text-sm font-medium text-shadow">{game.title}</h4>
                </div>

                {/* Animated corner effect */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-l-[20px] border-white/30 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </motion.div>
            ),
        )}
      </motion.div>

      {/* Navigation Dots */}
      <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
        {netlifyGames.map((_, index) => (
          <button
            key={`dot-${index}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-green-500 w-6" : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${netlifyGames[index].title}`}
          />
        ))}
      </div>
    </div>
  )
}


"use client"

import { motion } from "framer-motion"

interface SlideContentProps {
  title: string
  content: string
}

export default function SlideContent({ title, content }: SlideContentProps) {
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

  // Format content to handle line breaks and lists
  const formatContent = (text: string) => {
    // Split by line breaks
    const paragraphs = text.split("\n").filter((p) => p.trim() !== "")

    return paragraphs.map((paragraph, index) => {
      // Check if it's a list item
      if (paragraph.trim().startsWith("-") || paragraph.trim().startsWith("*")) {
        return (
          <li key={index} className="ml-6 mb-2 list-disc">
            {paragraph.replace(/^[-*]\s*/, "")}
          </li>
        )
      }

      return (
        <p key={index} className="mb-4 last:mb-0">
          {paragraph}
        </p>
      )
    })
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full overflow-y-auto custom-scrollbar"
    >
      <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-4 text-white">
        {title}
      </motion.h2>

      <motion.div variants={itemVariants} className="prose prose-invert max-w-none text-white/90">
        {formatContent(content)}
      </motion.div>
    </motion.div>
  )
}


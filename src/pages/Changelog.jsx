import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const changelogEntries = [
  {
    version: "Version 1.0.0",
    date: "4 December 2024",
    title: "Initial Release",
    description:
      "Introducing Code Eternal - the ultimate desktop app for crafting perfect AI coding prompts. We're excited to launch and help developers supercharge their productivity.",
    items: [
      "Prompt Builder with structured composition",
      "Snippet Library for reusable code blocks",
      "Pre-built templates for common workflows",
      "Multi-language support (Web, Python, Node.js, Rust, Go)",
      "History tracking and session summaries",
    ],
    // image: "/assets/logo.png",
    // imageClass: "w-32 h-32 mx-auto object-contain",
    button: {
      url: "/#download",
      text: "Get started",
    },
  },
]

const Badge = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
    {children}
  </span>
)

const Changelog = () => {
  return (
    <section className="min-h-screen bg-navy relative">
      {/* Lamp Glow Effect at Top */}
      <div 
        className="fixed top-0 left-0 right-0 h-[600px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 255, 255, 0.2) 0%, rgba(0, 255, 255, 0.08) 40%, transparent 70%)',
        }}
      />

      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link 
          to="/" 
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(10,11,16,0.9)] border border-white/10 backdrop-blur-md text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 py-32 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl mb-16 md:mb-24"
          >
            <h1 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight text-white">
              Changelog
            </h1>
            <p className="text-base md:text-lg text-gray-400">
              Get the latest updates and improvements to Code Eternal.
            </p>
          </motion.div>

          {/* Entries */}
          <div className="mx-auto max-w-3xl space-y-16 md:space-y-24">
            {changelogEntries.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col gap-4 md:flex-row md:gap-16"
              >
                {/* Version & Date - Sticky on desktop */}
                <div className="top-8 flex h-min w-full md:w-64 shrink-0 items-center gap-4 md:sticky">
                  <Badge>{entry.version}</Badge>
                  <span className="text-xs font-medium text-gray-500">
                    {entry.date}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h2 className="mb-3 text-xl md:text-2xl font-bold text-white/90 leading-tight">
                    {entry.title}
                  </h2>
                  <p className="text-sm md:text-base text-gray-400">
                    {entry.description}
                  </p>

                  {/* Items list */}
                  {entry.items && entry.items.length > 0 && (
                    <ul className="mt-4 ml-4 space-y-1.5 text-sm md:text-base text-gray-400">
                      {entry.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="list-disc">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Image */}
                  {entry.image && (
                    <img
                      src={entry.image}
                      alt={`${entry.version} visual`}
                      className={entry.imageClass || "mt-8 w-full rounded-lg object-cover border border-white/10"}
                    />
                  )}

                  {/* Button */}
                  {entry.button && (
                    <a 
                      href={entry.button.url}
                      className="mt-6 self-start inline-flex items-center gap-2 text-neon-cyan hover:text-neon-cyan/80 transition-colors text-sm font-medium"
                    >
                      {entry.button.text}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Changelog

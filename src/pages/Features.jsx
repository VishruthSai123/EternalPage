import React, { useState } from 'react'
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'
import { 
  Layers, 
  Library, 
  FileText, 
  Users, 
  History, 
  Globe,
  ArrowLeft
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { CanvasRevealEffect } from '../components/ui/CanvasRevealEffect'

const features = [
  {
    id: '1',
    icon: Layers,
    title: "Prompt Builder",
    subtitle: "Structured prompts",
    description: "Compose structured prompts with project context, task definition, constraints, and code snippets.",
    colors: [[66, 240, 255], [56, 189, 248]], // cyan
  },
  {
    id: '2',
    icon: Library,
    title: "Snippet Library",
    subtitle: "Reusable code",
    description: "Save reusable code blocks with titles, descriptions, and tags for quick access.",
    colors: [[168, 85, 247], [236, 72, 153]], // purple-pink
  },
  {
    id: '3',
    icon: FileText,
    title: "Templates",
    subtitle: "Pre-built structures",
    description: "Pre-built prompt structures for debugging, adding features, and refactoring code.",
    colors: [[251, 146, 60], [239, 68, 68]], // orange-red
  },
  {
    id: '4',
    icon: Users,
    title: "Community Snippets",
    subtitle: "Shared patterns",
    description: "Browse, like, and save snippets shared by other developers in the community.",
    colors: [[34, 197, 94], [16, 185, 129]], // green
  },
  {
    id: '5',
    icon: History,
    title: "History & Summary",
    subtitle: "Auto tracking",
    description: "Automatically tracks your prompts and summarizes sessions for easy revisiting.",
    colors: [[59, 130, 246], [99, 102, 241]], // blue-indigo
  },
  {
    id: '6',
    icon: Globe,
    title: "Multi-Language",
    subtitle: "Constraint presets",
    description: "Pre-configured constraints for Web, Python, Node.js, Rust, Go, and Mobile development.",
    colors: [[236, 72, 153], [244, 63, 94]], // pink-rose
  },
]

// Duplicate for seamless loop
const duplicatedFeatures = [...features, ...features]

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovering, setIsHovering] = useState(false)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className="group/spotlight min-w-[280px] w-[300px] md:w-[320px] h-[340px] md:h-[360px] flex-shrink-0 p-8 rounded-2xl relative border border-white/10 bg-[#0a0b10]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: '#262626',
          maskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={feature.colors}
            dotSize={3}
          />
        )}
      </motion.div>

      {/* Content - Centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
          <Icon className="w-8 h-8 text-white/80" strokeWidth={1.5} />
        </div>
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{feature.title}</h3>
        
        {/* Subtitle */}
        <p className="text-xs uppercase tracking-wider text-white/40 mb-3">{feature.subtitle}</p>
        
        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
      </div>
    </div>
  )
}

const Features = () => {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="min-h-screen bg-navy flex flex-col">
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

      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-radial from-neon-purple/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gradient-radial from-neon-cyan/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Header - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta">Features</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to craft perfect prompts for AI coding assistants
          </p>
        </motion.div>

        {/* Auto-scrolling Carousel - Pauses on hover */}
        <div 
          className="w-full overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-navy via-navy/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-navy via-navy/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling track - using CSS animation */}
          <div
            className={`flex gap-6 py-4 pl-8 animate-scroll-features ${isPaused ? 'pause-animation-features' : ''}`}
            style={{ width: 'max-content' }}
          >
            {duplicatedFeatures.map((feature, index) => (
              <FeatureCard key={`${feature.id}-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>

      {/* CSS for smooth scrolling */}
      <style>{`
        @keyframes scrollFeatures {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-features {
          animation: scrollFeatures 30s linear infinite;
        }
        .pause-animation-features {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default Features

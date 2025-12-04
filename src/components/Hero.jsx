import { motion } from 'framer-motion'
import GradientBlinds from './GradientBlinds'

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* GradientBlinds Background Layer */}
      <div className="absolute inset-0 z-0">
        <GradientBlinds
          gradientColors={['#05060a', '#1a0a2e', '#7b5cff', '#42f0ff', '#ff6ddb']}
          angle={-45}
          noise={0.15}
          blindCount={14}
          blindMinWidth={80}
          spotlightRadius={0.6}
          spotlightSoftness={1.2}
          spotlightOpacity={0.8}
          mouseDampening={0}
          distortAmount={0.5}
          shineDirection="left"
          mixBlendMode="normal"
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-navy/40 via-transparent to-navy/80 pointer-events-none" />
      
      {/* Additional radial glow effects on top */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-radial from-neon-purple/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Hero Content - Centered */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
        >
          <span className="text-xs font-medium text-white/70">🚀 Desktop App Now Available</span>
          <svg className="w-3 h-3 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="gradient-text">Craft Perfect AI Prompts.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Build structured prompts with project context, save reusable snippets, and get consistently better AI-generated code.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="btn-glow group inline-flex items-center gap-2 px-8 py-4 bg-white text-navy font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/10">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span>Download for Free</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

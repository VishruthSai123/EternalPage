import { motion } from 'framer-motion'
import { GlowingEffect } from './GlowingEffect'

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'Build and deploy with blazing speed using our optimized toolchain.',
    iconColor: 'text-neon-cyan',
    iconBg: 'bg-neon-cyan/10',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption for your codebase.',
    iconColor: 'text-neon-purple',
    iconBg: 'bg-neon-purple/10',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'Infinite Scalability',
    description: 'From startup to enterprise, scale without limits or bottlenecks.',
    iconColor: 'text-neon-cyan',
    iconBg: 'bg-neon-cyan/10',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Developer First',
    description: 'Built by developers, for developers. Your workflow, amplified.',
    iconColor: 'text-neon-purple',
    iconBg: 'bg-neon-purple/10',
  },
]

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="relative group h-full"
    >
      {/* Card with hover glow effect */}
      <div className="relative h-full rounded-2xl bg-[#0a0b10]/95 border border-white/[0.08] p-6 transition-all duration-300 group-hover:border-white/[0.15] overflow-hidden">
        {/* Glowing Effect on hover */}
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        
        {/* Icon and Title Row */}
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className={`w-9 h-9 rounded-lg ${feature.iconBg} flex items-center justify-center ${feature.iconColor}`}>
            {feature.icon}
          </div>
          <h3 className="font-semibold text-white text-base">{feature.title}</h3>
        </div>
        
        {/* Description */}
        <p className="text-sm text-white/50 leading-relaxed relative z-10">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

const FeatureStrip = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white"
        >
          Empower
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neon-purple mb-8"
        >
          Modern Developers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-base md:text-lg max-w-2xl mx-auto"
        >
          Everything you need to build, ship, and scale your applications.
          Code Eternal provides the tools that last forever.
        </motion.p>
      </div>

      {/* Purple Gradient Container with Feature Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Gradient Background Container */}
        <div className="relative rounded-[2rem] p-8 md:p-10 overflow-hidden">
          {/* Purple gradient background */}
          <div 
            className="absolute inset-0 rounded-[2rem]"
            style={{
              background: `linear-gradient(135deg, 
                rgba(123, 92, 255, 0.5) 0%, 
                rgba(147, 112, 255, 0.4) 25%,
                rgba(168, 132, 255, 0.35) 50%,
                rgba(180, 140, 255, 0.4) 75%,
                rgba(200, 120, 200, 0.45) 100%
              )`,
            }}
          />
          
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
          
          {/* Bottom glow effect */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-gradient-to-t from-neon-purple/30 via-neon-magenta/20 to-transparent blur-3xl pointer-events-none" />

          {/* Cards Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default FeatureStrip

import { motion } from 'framer-motion'
import { useState } from 'react'

const SubscribeCTA = () => {
  const [email, setEmail] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle subscription
    console.log('Subscribing:', email)
  }

  return (
    <section className="relative py-20 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-neon-purple/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl font-semibold text-white mb-2"
        >
          Stay in the loop
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/40 text-sm mb-8"
        >
          Get the latest updates, features, and developer insights.
        </motion.p>

        {/* Email Input */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="relative"
        >
          <div className={`input-glow relative flex items-center bg-white/[0.03] border rounded-xl overflow-hidden transition-all duration-300 ${
            isFocused 
              ? 'border-neon-purple/50 shadow-[0_0_30px_rgba(123,92,255,0.15)]' 
              : 'border-white/[0.06] hover:border-white/10'
          }`}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none"
            />
            <button
              type="submit"
              className="btn-glow m-1.5 px-5 py-2.5 bg-white/[0.06] hover:bg-white/10 text-white/70 hover:text-white text-sm font-medium rounded-lg transition-all duration-300 border border-white/[0.06]"
            >
              Subscribe
            </button>
          </div>
          
          {/* Glow effect under input */}
          <div 
            className={`absolute -bottom-4 left-1/4 right-1/4 h-8 bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent blur-xl transition-opacity duration-300 ${
              isFocused ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </motion.form>
      </div>
    </section>
  )
}

export default SubscribeCTA

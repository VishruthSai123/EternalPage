import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import AnimatedShaderBackground from '../components/ui/AnimatedShaderBackground';

const Templates = () => {
  return (
    <AnimatedShaderBackground className="min-h-screen w-full">
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        {/* Back to home */}
        <Link 
          to="/" 
          className="absolute top-6 left-6 text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Home
        </Link>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 
                       bg-white/5 backdrop-blur-sm border border-white/10 
                       rounded-full text-sm text-gray-300"
          >
            <Sparkles className="w-4 h-4 text-neon-cyan" />
            Coming Soon
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Templates
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
          >
            We're working hard to bring you a collection of beautiful, 
            production-ready templates for your AI-powered coding workflows. 
            <br className="hidden md:block" />
            Stay tuned for something amazing!
          </motion.p>

          {/* Progress indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center justify-center gap-3 text-sm text-gray-500 mb-3">
              <span>In Development</span>
            </div>
            <div className="w-64 h-1.5 bg-white/10 rounded-full mx-auto overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '65%' }}
                transition={{ delay: 0.8, duration: 1.5, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
              />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              to="/#download"
              className="inline-flex items-center gap-2 px-8 py-4 
                         bg-gradient-to-r from-neon-cyan to-neon-purple 
                         text-navy font-semibold rounded-full
                         hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] 
                         transition-all duration-300 hover:scale-105"
            >
              Try The App
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </div>
    </AnimatedShaderBackground>
  );
};

export default Templates;

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const screenshots = [
  { id: 1, image: '/assets/1.png', alt: 'Code Eternal View 1' },
  { id: 2, image: '/assets/2.png', alt: 'Code Eternal View 2' },
  { id: 3, image: '/assets/3.png', alt: 'Code Eternal View 3' },
  { id: 4, image: '/assets/4.png', alt: 'Code Eternal View 4' },
  { id: 5, image: '/assets/5.png', alt: 'Code Eternal View 5' },
  { id: 6, image: '/assets/6.png', alt: 'Code Eternal View 6' },
]

const ScreenshotCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px] group"
    >
      {/* Screenshot Image - no container, just the image with subtle effects */}
      <img 
        src={data.image} 
        alt={data.alt}
        className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />
    </motion.div>
  )
}

const CardGrid = () => {
  const sectionRef = useRef(null)
  const carouselRef = useRef(null)
  const [carouselProgress, setCarouselProgress] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)

  // Calculate the carousel's max scroll width
  useEffect(() => {
    const updateMaxScroll = () => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth
        const clientWidth = carouselRef.current.clientWidth
        setMaxScroll(scrollWidth - clientWidth)
      }
    }
    
    // Small delay to ensure images are loaded
    const timer = setTimeout(updateMaxScroll, 100)
    window.addEventListener('resize', updateMaxScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', updateMaxScroll)
    }
  }, [])

  // Use scroll progress of the section
  // "start start" = section top hits viewport top (0%)
  // "end end" = section bottom hits viewport bottom (100%)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  })

  // Transform vertical scroll to horizontal carousel position
  const carouselX = useTransform(scrollYProgress, [0, 1], [0, -maxScroll])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCarouselProgress(latest)
  })

  // Calculate section height: 100vh for the sticky view + extra scroll distance
  // The extra distance should be enough to scroll through all images
  const sectionHeight = `${200 + screenshots.length * 30}vh`

  return (
    <section 
      ref={sectionRef}
      className="relative mt-32"
      style={{ height: sectionHeight }}
    >
      {/* Sticky container - this stays fixed while user scrolls through the section */}
      <div className="sticky top-0 left-0 right-0 h-screen w-full flex flex-col justify-start pt-10 overflow-hidden bg-navy">
        {/* Background gradient effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-gradient-radial from-neon-purple/8 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-gradient-radial from-neon-cyan/8 via-transparent to-transparent blur-3xl" />
        </div>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center mb-6 px-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to craft better prompts for your AI coding assistants
          </p>
        </motion.div>

        {/* Horizontal scrolling carousel */}
        <div className="relative w-full overflow-hidden">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-navy via-navy/90 to-transparent z-10 pointer-events-none" />
          
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-navy via-navy/90 to-transparent z-10 pointer-events-none" />

          {/* Carousel track */}
          <motion.div
            ref={carouselRef}
            style={{ x: carouselX }}
            className="flex gap-6 px-16 py-4"
          >
            {screenshots.map((screenshot, index) => (
              <ScreenshotCard key={screenshot.id} data={screenshot} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full"
              style={{ width: `${carouselProgress * 100}%` }}
            />
          </div>
          <span className="text-white/40 text-sm font-medium">
            {Math.round(carouselProgress * 100)}%
          </span>
        </div>

        {/* Scroll hint */}
        {carouselProgress < 0.1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-xs">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default CardGrid

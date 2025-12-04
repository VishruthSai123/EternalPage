import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Simple nav link with hover effect - supports both href and to
const NavLink = ({ href, to, children }) => {
  if (to) {
    return (
      <Link 
        to={to} 
        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
      >
        {children}
      </Link>
    )
  }
  return (
    <a 
      href={href} 
      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full')
  const [isVisible, setIsVisible] = useState(true)
  const shapeTimeoutRef = useRef(null)
  
  const { scrollY } = useScroll()

  // Hide header when scrolling past the hero section (100vh)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const heroHeight = window.innerHeight // 100vh - hero section height
    
    // Hide header once user scrolls past the hero section
    if (latest > heroHeight * 0.8) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  })

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current)
    }

    if (isOpen) {
      setHeaderShapeClass('rounded-2xl')
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full')
      }, 300)
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current)
      }
    }
  }, [isOpen])

  const navLinksData = [
    { label: 'Features', to: '/features' },
    { label: 'Templates', to: '/templates' },
    { label: 'Changes', to: '/changelog' },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -100 
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-6 left-0 right-0 mx-auto z-50
                  flex flex-col items-center
                  px-5 py-2.5 backdrop-blur-md
                  ${headerShapeClass}
                  border border-white/10 bg-[rgba(10,11,16,0.6)]
                  shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]
                  w-[calc(100%-2rem)] sm:w-fit max-w-max
                  transition-[border-radius] duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-center w-full gap-x-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/assets/logo.png" 
            alt="Code Eternal" 
            className="w-6 h-6 rounded-md object-contain"
          />
          <span className="font-medium text-white text-sm">Code Eternal</span>
        </div>

        {/* Desktop Nav Links - Centered */}
        <nav className="hidden sm:flex items-center gap-6">
          {navLinksData.map((link) => (
            <NavLink key={link.to || link.href} href={link.href} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden sm:flex items-center">
          <div className="relative group">
            <div className="absolute inset-0 -m-1 rounded-full bg-neon-cyan/30 opacity-0 blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-60 group-hover:blur-xl group-hover:-m-2"></div>
            <Link to="/download" className="relative z-10 px-3 py-1.5 text-sm font-semibold text-navy bg-gradient-to-br from-neon-cyan to-neon-blue rounded-full hover:from-white hover:to-gray-200 transition-all duration-200">
              Download
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none" 
          onClick={toggleMenu} 
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? 'max-h-[500px] opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-4 text-base w-full">
          {navLinksData.map((link) => (
            link.to ? (
              <Link 
                key={link.to} 
                to={link.to} 
                className="text-gray-300 hover:text-white transition-colors w-full text-center"
              >
                {link.label}
              </Link>
            ) : (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors w-full text-center"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>
        <div className="flex flex-col items-center mt-4 w-full">
          <button className="px-4 py-2 text-sm font-semibold text-navy bg-gradient-to-br from-neon-cyan to-neon-blue rounded-full hover:from-white hover:to-gray-200 transition-all duration-200 w-full">
            Download
          </button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header

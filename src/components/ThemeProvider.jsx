import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({
  theme: 'dark',
  colors: {
    navy: '#05060a',
    bgDeep: '#0a0b10',
    bgCard: '#0d0e14',
    neonCyan: '#42f0ff',
    neonBlue: '#3aa0ff',
    neonMagenta: '#ff6ddb',
    neonPurple: '#7b5cff',
    neonPink: '#e94ef5',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    textMuted: 'rgba(255, 255, 255, 0.4)',
    glassBg: 'rgba(255, 255, 255, 0.03)',
    glassBorder: 'rgba(255, 255, 255, 0.06)',
  },
  gradients: {
    neon: 'linear-gradient(135deg, #42f0ff 0%, #7b5cff 50%, #ff6ddb 100%)',
    purple: 'linear-gradient(135deg, #7b5cff 0%, #a855f7 50%, #ec4899 100%)',
    cardRim: 'linear-gradient(90deg, transparent 0%, #42f0ff 20%, #7b5cff 50%, #ff6ddb 80%, transparent 100%)',
  },
  shadows: {
    neonWeak: '0 0 20px rgba(66, 240, 255, 0.15)',
    neonStrong: '0 0 40px rgba(66, 240, 255, 0.3)',
    card: '0 4px 40px rgba(0, 0, 0, 0.4)',
    cardHover: '0 8px 60px rgba(0, 0, 0, 0.5)',
  },
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [theme] = useState('dark')

  const themeConfig = {
    theme,
    colors: {
      navy: '#05060a',
      bgDeep: '#0a0b10',
      bgCard: '#0d0e14',
      neonCyan: '#42f0ff',
      neonBlue: '#3aa0ff',
      neonMagenta: '#ff6ddb',
      neonPurple: '#7b5cff',
      neonPink: '#e94ef5',
      textPrimary: '#ffffff',
      textSecondary: 'rgba(255, 255, 255, 0.7)',
      textMuted: 'rgba(255, 255, 255, 0.4)',
      glassBg: 'rgba(255, 255, 255, 0.03)',
      glassBorder: 'rgba(255, 255, 255, 0.06)',
    },
    gradients: {
      neon: 'linear-gradient(135deg, #42f0ff 0%, #7b5cff 50%, #ff6ddb 100%)',
      purple: 'linear-gradient(135deg, #7b5cff 0%, #a855f7 50%, #ec4899 100%)',
      cardRim: 'linear-gradient(90deg, transparent 0%, #42f0ff 20%, #7b5cff 50%, #ff6ddb 80%, transparent 100%)',
    },
    shadows: {
      neonWeak: '0 0 20px rgba(66, 240, 255, 0.15)',
      neonStrong: '0 0 40px rgba(66, 240, 255, 0.3)',
      card: '0 4px 40px rgba(0, 0, 0, 0.4)',
      cardHover: '0 8px 60px rgba(0, 0, 0, 0.5)',
    },
  }

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <ThemeContext.Provider value={themeConfig}>
      <div className="dark min-h-screen bg-navy text-white">
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#05060a',
        'bg-deep': '#0a0b10',
        'bg-card': '#0d0e14',
        'bg-card-light': '#12141c',
        'neon-cyan': '#42f0ff',
        'neon-blue': '#3aa0ff',
        'neon-magenta': '#ff6ddb',
        'neon-purple': '#7b5cff',
        'neon-pink': '#e94ef5',
        'glass-white': 'rgba(255, 255, 255, 0.06)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        'text-primary': '#ffffff',
        'text-secondary': 'rgba(255, 255, 255, 0.7)',
        'text-muted': 'rgba(255, 255, 255, 0.4)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        'neon-weak': '0 0 20px rgba(66, 240, 255, 0.15)',
        'neon-strong': '0 0 40px rgba(66, 240, 255, 0.3)',
        'neon-cyan': '0 0 30px rgba(66, 240, 255, 0.4)',
        'neon-magenta': '0 0 30px rgba(255, 109, 219, 0.4)',
        'neon-purple': '0 0 30px rgba(123, 92, 255, 0.4)',
        'card': '0 4px 40px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 60px rgba(0, 0, 0, 0.5)',
        'glow-cyan': '0 0 60px rgba(66, 240, 255, 0.2), 0 0 100px rgba(66, 240, 255, 0.1)',
        'glow-purple': '0 0 60px rgba(123, 92, 255, 0.3), 0 0 100px rgba(123, 92, 255, 0.15)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
        '3xl': '64px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        shimmer: 'shimmer 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #42f0ff 0%, #7b5cff 50%, #ff6ddb 100%)',
        'purple-gradient': 'linear-gradient(135deg, #7b5cff 0%, #a855f7 50%, #ec4899 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-outfit)', 'sans-serif'],
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#eef2fb',
          100: '#d6e0f5',
          200: '#adc1eb',
          300: '#7da0de',
          400: '#5280cc',
          500: '#3363b8',
          600: '#254f9e',
          700: '#1e3a7a', // primary navy — matches beltranbriones.com
          800: '#162d61',
          900: '#0f2047',
          950: '#08122b',
        },
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}

export default config

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        night: '#06080f',
        ink: '#0b1020',
        line: 'rgba(255,255,255,0.12)',
        founder: '#3b82f6',
        cyan: '#60e8ff',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia'],
      },
      boxShadow: {
        blueglow: '0 0 70px rgba(59,130,246,0.34)',
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};

export default config;

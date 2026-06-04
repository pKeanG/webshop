import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand — KUB (Bitkub Chain) identity (from mockup-v0.1.html :root)
        kub: {
          green: '#00E599',
          'green-light': '#E8FCF5',
          dark: '#0A0F14',
          darker: '#141A22',
          darkest: '#0E1318',
        },
        // Per-game accent tokens (mockup-v0.1-figma.md — per-game branding)
        game: {
          maplestory: '#F2A61A',
          yulgang: '#E83E8C',
        },
        // Rarity colors (industry-standard Steam/Diablo convention)
        rarity: {
          common: '#9CA3AF',
          rare: '#4593EE',
          epic: '#A55EDB',
          legendary: '#FFD700',
        },
        // Surfaces
        surface: '#FAFBFC',
        card: '#FFFFFF',
        border: '#E5E7EB',
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-thai)', 'system-ui', 'sans-serif'],
        thai: ['var(--font-noto-thai)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};

export default config;

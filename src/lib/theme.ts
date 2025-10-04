// TaxTrack Design System Theme Configuration
export const theme = {
  colors: {
    primary: {
      'midnight-navy': {
        50: '#f0f4ff',
        100: '#d9e2ff',
        500: '#1e3a8a',
        900: '#0f172a',
      },
      'aurora-teal': {
        50: '#f0fdfa',
        100: '#ccfbf1',
        500: '#14b8a6',
        900: '#134e4a',
      }
    }
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Space Grotesk', 'monospace'],
    }
  },
  spacing: {
    grid: 8, // 8px spacing grid
  },
  borderRadius: {
    default: 12, // soft corner radius
  },
  animation: {
    duration: {
      fast: 150,
      normal: 200,
      slow: 250,
    }
  }
} as const;

export type Theme = typeof theme;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ['./app/**/*.{js,ts,tsx}', './nebula/**/*.{js,ts,tsx}', './features/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: 'var(--color-secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)',
          foreground: 'var(--color-destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--color-popover)',
          foreground: 'var(--color-popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--color-card)',
          foreground: 'var(--color-card-foreground)',
        },
      },
    },
  },

  plugins: [
    ({ addBase }) =>
      addBase({
        ':root': {
          '--color-background': '#F5F7F9',
          '--color-foreground': '#01050B',
          '--color-primary': '#073570',
          '--color-primary-foreground': '#FFFFFF',
          '--color-card': '#F5F7F9',
          '--color-card-foreground': '#01050B',
          '--color-popover': '#FFFFFF',
          '--color-popover-foreground': '#01050B',
          '--color-secondary': '#DAE1EA',
          '--color-secondary-foreground': '#000204',
          '--color-muted': '#E6EBF1',
          '--color-muted-foreground': '#666666',
          '--color-accent': '#E6EBF1',
          '--color-accent-foreground': '#073570',
          '--color-border': '#E6E6E6',
          '--color-input': '#E6E6E6',
          '--color-ring': '#073570',
          '--color-destructive': '#EF4343',
          '--color-destructive-foreground': '#F4F4F6',
        },
        '.dark': {
          '--color-background': '#000204',
          '--color-foreground': '#DAE1EA',
          '--color-primary': '#073570',
          '--color-primary-foreground': '#FFFFFF',
          '--color-card': '#000204',
          '--color-card-foreground': '#DAE1EA',
          '--color-popover': '#000204',
          '--color-popover-foreground': '#DAE1EA',
          '--color-secondary': '#021327',
          '--color-secondary-foreground': '#FFFFFF',
          '--color-muted': '#191B1D',
          '--color-muted-foreground': '#808182',
          '--color-accent': '#021327',
          '--color-accent-foreground': '#DAE1EA',
          '--color-border': '#262626',
          '--color-input': '#262626',
          '--color-ring': '#073570',
          '--color-destructive': '#EF4343',
          '--color-destructive-foreground': '#F4F4F6',
        },
      }),
  ],
};

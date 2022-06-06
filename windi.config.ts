import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  mode: 'jit',
  theme: {
    extend:{
      colors:{
          "primary": "var(--primary-color)",
          "primaryLight": "var(--primary-light-color)",
          "primaryDark": "var(--primary-dark-color)",
          "secondary": "var(--secondary-color)",
          "secondaryLight": "var(--secondary-light-color)",
          "secondaryDark": "var(--secondary-dark-color)",
          "accent": "var(--accent-color)",
          "accentLight": "var(--accent-light-color)",
          "accentDark": "var(--accent-dark-color)",
          "accentContrast": "var(--accent-contrast-color)",
          "accentContrastDark": "var(--accent-contrast-black-color)",
          "error": "var(--error)",
          "warning": "var(--warning)",
          "info": "var(--info)",
          "success": "var(--success)",
      }
    }
  },
  extract: {
    include: ['**/*.{html,vue,jsx,tsx,svelte,css,scss}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  darkMode: "class",
  
})
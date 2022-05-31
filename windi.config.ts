import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{html,vue,jsx,tsx,svelte,css,scss}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  darkMode: "class",
  theme: {
   colors:{
    primary: "var(--primary-color)",
    primaryLight: "var(--primary-light-color)",
    primaryDark: "var(--primary-dark-color)",
    secondary: "var(--secondary-color)",
    secondaryLight: "var(--secondary-light-color)",
    secondaryDark: "var(--secondary-dark-color)",
    accent: "var(--accent-color)",
    accentLight: "var(--accent-light-color)",
    accentDark: "var(--accent-dark-color)",
    accentContrast: "var(--accent-contrast-color)",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50",
   }
  },
})
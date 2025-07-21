/** @type {import('tailwindcss').Config} */
export default {
  // The 'content' array is crucial. It tells Tailwind CSS where to look for
  // your utility classes. Tailwind will then only generate the CSS for the
  // classes it finds in these files, keeping your final CSS bundle small.
  content: [
    './index.html', // Your main HTML file
    './src/**/*.{js,ts,jsx,tsx}' // All JavaScript, TypeScript, JSX, and TSX files in the src directory and its subdirectories
  ],
  // The 'theme' section allows you to customize Tailwind's default design system.
  // You can extend existing values (like colors, spacing, fonts) or override them.
  theme: {
    extend: {
      // Custom font families can be added here.
      // 'inter' is used in the provided React code, so we define it here.
      // Make sure to also link the Inter font in your public/index.html
      // (e.g., via Google Fonts) for it to be available in the browser.
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
      // You can extend other theme properties here, e.g., colors, spacing, etc.
      // colors: {
      //   'custom-blue': '#1a2b3c',
      // },
    }
  },
  // The 'plugins' array allows you to add Tailwind CSS plugins.
  // For this project, no specific plugins are strictly required,
  // but you might add them later for additional functionality (e.g., typography).
  plugins: []
}

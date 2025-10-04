/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Asegura que Tailwind escanee tus componentes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),       // Mejora estilos de inputs, selects, etc.
    require('@tailwindcss/typography'),  // Ideal para textos largos o blogs
    require('@tailwindcss/aspect-ratio') // Útil para imágenes y videos responsivos
  ],
  
}
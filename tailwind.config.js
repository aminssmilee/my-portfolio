// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Slab"', 'serif'],
        manrope: ['Manrope', 'sans-serif'],       // ✅ Tambahkan ini
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      // tailwind.config.js
      extend: {
        colors: {
          darkBg: '#0f0f0f',
          neonCyan: '#00ffff',
          neonPink: '#ff00ff',
          softGray: '#e0e0e0',
          borderGray: '#2a2a2a',
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#f3f4f6", // Light gray (gray-100)
          dark: "#1f2937", // Dark gray (gray-900)
        },
        secondary: "#A7F3D0", // Light green (tailwind-green-300)
        accent: "#4CAF50", // White
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          "primary": "#4CAF50", // Green
          "secondary": "#A7F3D0", // Light green
          "accent": "#4CAF50", // White
          "neutral": "#1f2937", // Dark gray
          "base-100": "#f3f4f6", // Light gray background
          "info": "#2094f3",
          "success": "#36d399",
          "warning": "#fbbf24",
          "error": "#f87272",
        },
      },
      "cupcake", 
      "dracula"
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "mytheme",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7f1",
          100: "#d6ecdd",
          200: "#aed9bc",
          300: "#7cc096",
          400: "#4a9e6f",
          500: "#106934",
          600: "#0f5f2f",
          700: "#0d4f27",
          800: "#0a3f1f",
          900: "#083419",
        },
        ink: {
          50: "#f4f6f7",
          100: "#e2e7e9",
          200: "#c2ccd0",
          300: "#9aa8ad",
          400: "#71838a",
          500: "#4d6972",
          600: "#3e565e",
          700: "#32454b",
          800: "#26363b",
          900: "#141d20",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20, 29, 32, 0.04)",
        card: "0 8px 24px -8px rgba(16, 105, 52, 0.12), 0 2px 6px rgba(20, 29, 32, 0.06)",
        lift: "0 24px 60px -20px rgba(16, 105, 52, 0.28)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: 400 },
          "100%": { strokeDashoffset: 0 },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        drawLine: "drawLine 1.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};

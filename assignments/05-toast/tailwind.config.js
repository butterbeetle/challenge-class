/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(calc(100% + 24px))" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(100% + 24px))" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease",
        slideOut: "slideOut 0.5s ease",
      },
    },
  },
  plugins: [],
};

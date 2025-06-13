module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monument: ["Monument", "sans-serif"],
        garet: ["Garet", "sans-serif"],
        sans: ["Garet", "sans-serif"],
      },
      animation: {
        ring: "ringPulse 1.2s ease-out forwards",
      },
      keyframes: {
        ringPulse: {
          "0%": { opacity: 0, transform: "scale(0.5)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

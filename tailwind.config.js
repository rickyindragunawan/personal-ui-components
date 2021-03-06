module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        translation: {
          "0%, 100%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(300%)" },
        },
      },
      animation: {
        translation: "translation 3s linear infinite",
        spin: "spin 2s linear infinite",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        textPrimary: "var(--color-textPrimary)",
        textSecondary: "var(--color-textSecondary)",
        bgPrimary: "var(--color-bgPrimary)",
        bgSecondary: "var(--color-bgSecondary)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

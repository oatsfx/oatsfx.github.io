/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: "fadeIn 2s ease-in-out",
        "fade-lg": "fadeInDelay 3s ease-in-out",
        "fade-xl": "fadeInDelay 5s ease-in-out",
        "move-fade": "moveFadeIn 4s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeInDelay: {
          "0%, 40%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        moveFadeIn: {
          "0%, 20%": { transform: "translateY(2rem)", opacity: 0 },
          "100%": { transform: "translateY(-1rem)", opacity: 0.03 },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        oatsfx: {
          primary: "#1995ff",
          "primary-focus": "#1995ff",
          "primary-content": "#ffffff",
          secondary: "#ea3381",
          "secondary-focus": "#ea3381",
          "secondary-content": "#ffffff",
          accent: "#d99330",
          "accent-focus": "#b57721",
          "accent-content": "#ffffff",
          neutral: "#110e0e",
          "neutral-focus": "#060404",
          "neutral-content": "#ffffff",
          "base-100": "#eefaff",
          "base-200": "#110e0e",
          "base-300": "#0f0c0c",
          "base-content": "#292a2b",
          info: "#66c7ff",
          success: "#87cf3a",
          warning: "#e1d460",
          error: "#ff6b6b",
          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": ".25s",
          "--animation-input": ".2s",
          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
};

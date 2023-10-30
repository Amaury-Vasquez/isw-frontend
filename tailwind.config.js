/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["dark", "synthwave", "forest", "emerald"],
  },
  theme: {
    minHeight: {
      content: "calc(100vh - 4rem)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "collapse-down-left": {
          from: {
            opacity: "0",
            transform: "scale(0)",
            transformOrigin: "top right",
          },
        },
        "collapse-up-right": {
          to: {
            opacity: "0",
            transform: "scale(0)",
            transformOrigin: "top right",
          },
        },
      },
      animation: {
        "collapse-down-left": "collapse-down-left 0.3s ease-out",
        "collapse-up-right": "collapse-up-right 0.3s ease-in",
      },
    },
  },
  plugins: [require("daisyui")],
};

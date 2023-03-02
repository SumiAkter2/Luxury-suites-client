/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        primary: "#fff",
        secondary: "rgb(156 163 175)",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    ],
  },

  plugins: [require("daisyui")],
};

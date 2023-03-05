/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a87932",

          secondary: "#d1d5db",

          accent: "#ca8a04",

          neutral: "#06b6d4",

          "base-100": "#FFFFFF",

          info: "#666564",

          success: "#facc15",

          warning: "#d97706",

          error: "#e11d48",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};

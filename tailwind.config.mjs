/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5a3bf9",

          secondary: "#bd1af0",

          accent: "#d8078a",

          neutral: "#040404",

          "base-100": "#f6fefa",

          info: "#05a9ff",

          success: "#51c000",

          warning: "#e16200",

          error: "#c10035",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

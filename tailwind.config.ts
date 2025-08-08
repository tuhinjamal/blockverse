import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        vina: ['"Vina Sans"', "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;

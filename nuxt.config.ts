// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ["@nuxt/icon", "@nuxt/fonts"],
  fonts: {
    google: {
      families: ["Vina Sans", "Akshar", "Campton", "Satoshi Variable", "Inter"],
    },
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: 'Zaptrade - Build Wealth with Crypto',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@vueuse/motion/nuxt",
    "@nuxt/image",
  ],
  colorMode: {
    classSuffix: "",
  },
  googleFonts: {
    families: {
      Roboto: true,
      "Roboto Mono": true,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

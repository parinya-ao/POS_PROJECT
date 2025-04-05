// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    "/": { prerender: true, cache: { maxAge: 60 * 60 } },
    "/history": { prerender: true, cache: { maxAge: 60 * 60 } },
    "/additem": { prerender: true, cache: { maxAge: 60 * 60 } },
  },

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
  ],

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-27",
  runtimeConfig: {
    public: {
      url: process.env.NUXT_PUBLIC_API_URL,
    },
  },
});

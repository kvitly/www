import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
//   target: "static",
  build: {
    extractCSS: true,
    transpile: ["@headlessui/vue"],
  },
  app: {
    baseURL: "/www/",
  },
//   nitro: {
//     prerender: {
//       routes: ["/", "/products/website", "/products/ecommerce"],
//     },
//   },
});

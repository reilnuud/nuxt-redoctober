import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  buildModules: ["@nuxtjs/tailwindcss"],
  build: {
    extend(config) {
      // Include the compiler version of Vue so that <component-name> works
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias.vue$ = "vue/dist/vue.esm.js";
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  $meta: {
    script: [
      {
        src: "https://s.yimg.jp/images/yjdn/js/bakusoku-jsonp-v1.js",
      },
    ],
  },
});

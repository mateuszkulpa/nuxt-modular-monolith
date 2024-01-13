export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
  ],
  extends: [
    './layers/surveys',
    './layers/users',
  ],
  nitro: {
    experimental: {
      openAPI: true
    }
  }
})

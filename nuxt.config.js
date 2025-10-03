export default {
  target: 'static',
  head: {
    charset: 'utf-8',
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Roman Turaj',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {property: 'og:title', content: 'Roman Turaj'},
      {property: 'og:description', content: 'Senior Fullstack Developer'},
      {property: 'og:url', content: 'https://romanturaj.com/'},
      {property: 'og:image', content: 'https://romanturaj.com/og_image.jpg'},
      {property: 'og:image:type', content: 'image/jpg'},
      {
        name: 'description',
        hid: 'description',
        content: 'Senior Fullstack Developer',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'canonical',
        href: 'https://romanturaj.com',
      },
    ],
  },

  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '~/plugins/vuelidate.js' }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/gtm'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */ gtm: {
    id: 'G-R34VKNJV0Y',
  },
  build: {},
}

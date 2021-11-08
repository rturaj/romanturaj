<template>
  <div class="flex text-2xl lg:text-4xl py-2 md:py-3 lg:py-4">
    <div v-for="(icon, key) in icons" :key="key" class="mr-4">
      <a
        target="_blank"
        :href="icon.href"
        :aria-label="icon.name"
        rel="noopener"
      >
        <img :src="icon.img" :alt="icon.name" class="h-8 md:h-10" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          name: 'Github',
          img: '/gh.svg',
          href: 'https://github.com/rturaj',
        },
        {
          name: 'Linkedin',
          img: '/ln.svg',
          href: 'https://www.linkedin.com/in/roman-turaj/',
        },
        {
          name: 'Facebook',
          img: '/fb.svg',
          href: 'https://www.facebook.com/romek.turaj',
        },
      ],
    }
  },
}
</script>

<style></style>

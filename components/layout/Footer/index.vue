<template>
  <footer
    class="py-4 border-t border-gray z-50 text-sm flex justify-between px-1"
  >
    <div>2021 - {{ year }} Roman Turaj</div>
    <div class="flex text-xl">
      <div v-for="(icon, key) in icons" :key="key" class="mr-2">
        <a
          target="_blank"
          :href="icon.href"
          :aria-label="icon.name"
          rel="noopener"
        >
          <img :src="icon.img" :alt="icon.name" class="h-4" />
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
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

<template>
  <div class="flex text-2xl lg:text-4xl py-2 md:py-3 lg:py-4">
    <div v-for="(icon, key) in icons" :key="key" class="mr-4">
      <a
        target="_blank"
        :href="icon.href"
        :aria-label="icon.name"
        rel="noopener"
      >
        <i :class="icon.className"></i>
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
          className: 'devicon-github-plain colored',
          href: 'https://github.com/rturaj',
        },
        {
          name: 'Linkedin',
          className: 'devicon-linkedin-plain colored',
          href: 'https://www.linkedin.com/in/roman-turaj/',
        },
        {
          name: 'Facebook',
          className: 'devicon-facebook-plain colored',
          href: 'https://www.facebook.com/romek.turaj',
        },
      ],
    }
  },
}
</script>

<style></style>

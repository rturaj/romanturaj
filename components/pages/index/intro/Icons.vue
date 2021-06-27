<template>
  <div class="flex text-2xl lg:text-4xl py-4">
    <div v-for="(icon, key) in icons" :key="key" class="mr-4">
      <a target="_blank" :href="icon.href">
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
          className: 'devicon-github-plain ',
          href: 'https://github.com/rturaj',
        },
        {
          className: 'devicon-linkedin-plain colored',
          href: 'https://www.linkedin.com/in/roman-turaj/',
        },
        {
          className: 'devicon-facebook-plain colored',
          href: 'https://www.facebook.com/romek.turaj',
        },
      ],
    }
  },
}
</script>

<style></style>

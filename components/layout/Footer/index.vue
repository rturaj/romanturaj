<template>
  <footer
    class="py-4 border-t border-gray z-50 text-sm flex justify-between px-1"
  >
    <div>&copy; 2021 Roman Turaj</div>
    <div class="flex text-xl">
      <div v-for="(icon, key) in icons" :key="key" class="mr-2">
        <a target="_blank" :href="icon.href">
          <i :class="icon.className"></i>
        </a>
      </div>
    </div>
  </footer>
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
          className: 'devicon-linkedin-plain',
          href: 'https://www.linkedin.com/in/roman-turaj/',
        },
        {
          className: 'devicon-facebook-plain',
          href: 'https://www.facebook.com/romek.turaj',
        },
      ],
    }
  },
}
</script>
<style></style>

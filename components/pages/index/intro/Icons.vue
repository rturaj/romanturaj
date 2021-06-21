<template>
  <div class="flex text-4xl py-4">
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
          href: 'https://github.com/rturaj',
        },
        {
          className: 'devicon-facebook-plain colored',
          href: 'https://github.com/rturaj',
        },
      ],
    }
  },
}
</script>

<style></style>

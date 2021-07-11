<template>
  <div @click="scrollToTop" class="flex cursor-pointer">
    <div class="mr-4">
      <img src="/header.webp" style="width: 60px; height: 60px" alt="logo" />
    </div>
    <div>
      <div class="font-bold leading-tight mt-2">Roman Turaj</div>
      <div class="text-xs">Fullstack Developer</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scroll({ top: 0 })
    },
  },
}
</script>

<style></style>

<template>
  <header
    class="
      flex
      justify-between
      items-center
      mb-4
      py-2
      sticky
      top-0
      bg-white
      border-b border-gray
      z-50
    "
  >
    <logo />
    <navigation />
  </header>
</template>
<script>
import Navigation from './Navigation'
import Logo from './Logo'
export default {
  components: {
    Navigation,
    Logo,
  },
}
</script>
<style></style>

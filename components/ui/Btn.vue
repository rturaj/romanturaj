<template>
  <button
    class="whitespace-normal shadow-2xl px-4 sm:px-8 py-2 text-sm lg:text-base rounded-md transition duration-500 ease-in-out border border-gray focus:outline-none w-48 bg-white text-black hover:text-white hover:bg-black"
    @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      default: 'primary',
    },
  },
  computed: {
    btnClass() {
      let result =
        ''
      if (this.mode === 'primary') {
        result += ' bg-black text-white'
      } else {
        result += ' '
      }
      return result
    },
  },
}
</script>

<style scoped>
button {
  white-space: nowrap;
}
</style>

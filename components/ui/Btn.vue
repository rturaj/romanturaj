<template>
  <button :class="btnClass" @click="$emit('click')">
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
        'whitespace-normal shadow-2xl	 px-4 sm:px-8 py-2 text-sm lg:text-base rounded-xl transition duration-500 ease-in-out border border-gray focus:outline-none w-48 '
      if (this.mode === 'primary') {
        result += 'bg-black text-white'
      } else {
        result += 'text-black  hover:bg-black hover:text-white'
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

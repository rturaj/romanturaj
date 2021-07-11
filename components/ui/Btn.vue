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
        'px-3 xs:px-4 sm:px-8 py-1 sm:py-2 text-sm lg:text-base rounded-2xl transition duration-300 ease-in-out border focus:outline-none '
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

<style></style>

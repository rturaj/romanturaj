<template>
  <button :href="href" :class="btnClass" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      default: 'primary',
    },
    href: {},
  },
  computed: {
    btnClass() {
      let result =
        'px-8 py-2 rounded-full transition duration-300 ease-in-out border focus:outline-none '
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

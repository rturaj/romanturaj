<template>
  <button href="" :class="btnClass"><slot /></button>
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
      console.log(this.mode)
      if (this.mode === 'primary') {
        return ' bg-black rounded-full font-bold text-white px-8 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-black border'
      } else {
        return ' rounded-full font-bold text-black px-8 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-black border'
      }
    },
  },
}
</script>

<style></style>

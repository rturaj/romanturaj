<template>
  <div
    class="
      rounded
      bg-white
      shadow-lg
      rounded-lg
      relative
      transform
      hover:scale-95
      transition
      duration-300
      ease-in-out
    "
    style="min-height: 380px; max-width: 380px"
  >
    <div style="width: 80px" class="text-center mx-auto">
      <img
        :src="item.img"
        :alt="item.name"
        style="width: 100%; height: 100%"
        class="rounded-full"
      />
    </div>
    <h4 class="font-bold text-center mt-4">{{ item.name }}</h4>
    <div class="text-xs text-center">{{ item.position }}</div>
    <p class="m-4 text-justify text-sm">{{ item.content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
}
</script>

<style></style>

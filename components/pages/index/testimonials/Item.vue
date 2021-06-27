<template>
  <div
    class="
      rounded
      bg-white
      shadow-lg
      rounded-lg
      m-2
      relative
      transform
      hover:scale-95
      transition
      duration-300
      ease-in-out
      flex flex-col
      items-center
    "
    style="min-width: 300px; max-width: 370px"
  >
    <div style="width: 80px" class="text-center">
      <img
        :src="item.img"
        style="width: 100%; height: 100%"
        class="rounded-full"
      />
    </div>
    <h4 class="font-bold text-center mt-4">{{ item.name }}</h4>
    <div class="text-xs">{{ item.position }}</div>
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

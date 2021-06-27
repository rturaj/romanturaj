<template>
  <a
    :href="item.url"
    target="_blank"
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
    "
    style="min-width: 300px; max-width: 370px"
  >
    <img :src="item.img" style="width: 100%; height: 180px" />
    <div class="px-4">
      <h3 class="mt-4 text-center font-semibold text-lg">{{ item.title }}</h3>
      <p class="py-2 text-sm text-justify" style="min-height: 120px">
        {{ item.description }}
      </p>
      <div class="py-4 text-xs flex items-center">
        <div class="mr-2"><img src="/tool.svg" /></div>
        <div>{{ item.tools }}</div>
      </div>
    </div>
    <div
      v-if="item.url"
      class="
        absolute
        top-0
        right-0
        m-4
        bg-white
        border
        p-4
        flex
        focus:outline-none
        rounded-full
      "
    >
      <img src="/launch.svg" />
    </div>
  </a>
</template>

<script>
import Btn from '@/components/ui/Btn'
export default {
  components: {
    Btn,
  },
  props: {
    item: {
      type: Object,
    },
  },
}
</script>

<style></style>

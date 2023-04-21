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
      mb-4
    "
    style="min-height: 420px; max-width: 370px"
  >
    <div
      :style="{ 'background-image': `url(${item.img})` }"
      class="h-48 w-full bg-center bg-cover"
    ></div>
    <div class="px-4">
      <h3 class="mt-4 text-center font-semibold text-lg">{{ item.title }}</h3>
      <p class="py-2 text-sm text-justify" style="min-height: 120px">
        {{ item.description }}
      </p>
      <div class="py-4 text-xs flex items-center">
        <div class="mr-2"><img src="/tool.svg" alt="tools-icon" /></div>
        <div>{{ item.tools }}</div>
      </div>
    </div>
    <template v-if="item.url">
      <a
        :href="item.url"
        rel="noopener"
        :aria-label="item.title"
        target="_blank"
        v-if="!item.waiting"
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
        <img src="/launch.svg" alt="launch-icon" />
      </a>
      <div
        v-else
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
        <img src="/hourglass.svg" alt="hourglass-icon" />
      </div>
    </template>
  </div>
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

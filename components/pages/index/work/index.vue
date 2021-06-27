<template>
  <section class="p-8 border-gray border-b">
    <h2 class="text-3xl leading-snug font-light text-center pb-8">Work</h2>
    <div class="flex flex-wrap">
      <item v-for="item in items" :key="item.title" :item="item" />
    </div>
  </section>
</template>

<script>
import Item from './Item'
import data from './data.json'
export default {
  data() {
    return {
      items: data.sort((a, b) => b.rate - a.rate),
    }
  },

  components: {
    Item,
  },
}
</script>

<style></style>

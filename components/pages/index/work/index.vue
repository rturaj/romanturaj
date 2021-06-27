<template>
  <section class="p-8 border-gray border-b">
    <h2 class="text-3xl leading-snug font-light text-center pb-8">WORK</h2>
    <div class="flex flex-wrap">
      <work-item v-for="item in items" :key="item.title" :item="item" />
    </div>
  </section>
</template>

<script>
import WorkItem from './WorkItem'
import data from './data.json'
export default {
  data() {
    return {
      items: data,
    }
  },

  components: {
    WorkItem,
  },
}
</script>

<style></style>

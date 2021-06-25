<template>
  <section class="p-8 border-gray border-b">
    <h2 class="text-3xl leading-snug font-light text-center pb-4">WORK</h2>

    <filters v-model="category" />
    <transition-group
      enter-class="opacity-0 "
      enter-to-class="opacity-100 "
      leave-class="opacity-100 "
      leave-to-class="opacity-0"
      tag="div"
      class="flex flex-wrap"
    >
      <!-- <div > -->
      <work-item v-for="item in items" :key="item.url" :item="item" />
      <!-- </div> -->
    </transition-group>
  </section>
</template>

<script>
import WorkItem from './WorkItem'
import Filters from './Filters'
import data from './data.json'
export default {
  data() {
    return {
      category: null,
    }
  },
  computed: {
    items() {
      return data
        .filter((el) =>
          this.category ? el.categories.includes(this.category) : true
        )
        .sort((a, b) => b.rate - a.rate)
    },
  },
  components: {
    WorkItem,
    Filters,
  },
}
</script>

<style></style>

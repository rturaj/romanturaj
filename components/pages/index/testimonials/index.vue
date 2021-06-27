<template>
  <section class="px-2 md:px-4 lg:px-8 border-gray border-b py-8 lg:py-16">
    <h2 class="text-3xl leading-snug font-light text-center pb-8">
      Testimonials
    </h2>
    <div class="flex flex-wrap"></div>
    <VueSlickCarousel v-bind="settings">
      <item v-for="item in items" :key="item.title" :item="item" />
    </VueSlickCarousel>
  </section>
</template>

<script>
import Item from './Item'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import slick from '@/mixins/slick'
import data from './data.json'
export default {
  mixins: [slick],
  data() {
    return {
      // items: data.sort((a, b) => b.rate - a.rate),
      items: data,
    }
  },

  components: {
    Item,
    VueSlickCarousel,
  },
}
</script>

<style></style>

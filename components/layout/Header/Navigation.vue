<template>
  <nav class="flex py-2">
    <div
      v-for="(item, key) in menuItems"
      :key="key"
      class="
        px-4
        font-semibold
        uppercase
        text-sm
        hover:border-b-2
        hover:pb-1
        cursor-pointer
      "
    >
      <div @click="scrollTo(item.to)">
        {{ item.label }}
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          label: 'about',
          to: 'about',
        },
        {
          label: 'work',
          to: 'work',
        },
        {
          label: 'testimonials',
          to: 'testimonials',
        },
        {
          label: 'contact',
          to: 'contact',
        },
      ],
    }
  },
  methods: {
    scrollTo(id) {
      document.getElementById(id).scrollIntoView()
    },
  },
}
</script>

<style></style>

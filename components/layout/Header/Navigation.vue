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
      <div
        @click="scrollTo(item.to)"
        :class="{
          'border-b-2 pb-1':
            scrollPosition > item.top && scrollPosition < item.bottom,
        }"
      >
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
      scrollPosition: null,
    }
  },
  methods: {
    scrollTo(id) {
      document.getElementById(id).scrollIntoView()
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollPosition = window.scrollY - 60
    })
    this.menuItems.forEach((el) => {
      const rect = document.getElementById(el.to).getBoundingClientRect()
      el.top = rect.top
      el.bottom = rect.bottom
    })
  },
}
</script>

<style></style>

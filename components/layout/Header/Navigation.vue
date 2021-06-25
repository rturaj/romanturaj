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
          'border-b-2 pb-1': active === item.to,
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
          label: 'intro',
          to: 'intro',
        },

        {
          label: 'work',
          to: 'work',
        },
        {
          label: 'about',
          to: 'about',
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
      active: 'intro',
    }
  },
  methods: {
    scrollTo(id) {
      this.active = id
      document.getElementById(id).scrollIntoView()
    },
  },
}
</script>

<style></style>

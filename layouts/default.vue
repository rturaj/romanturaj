<template>
  <div class="custom-container">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
.custom-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  overflow-x: hidden;
}
</style>

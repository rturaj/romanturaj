<template>
  <div>
    <intro  id="intro"/>
    <work  id="work"/>
    <about id="about" />
    <testimonials id="about" />
  </div>
</template>

<script>
import Intro from '../components/pages/index/intro'
import Work from '../components/pages/index/work'
import About from '../components/pages/index/about'
import Testimonials from '../components/pages/index/testimonials'
export default {
  components: {
    Intro, About, Work,Testimonials
  }
}
</script>

<style>

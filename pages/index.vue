<template>
  <div>
    <intro id="intro" />
    <work id="work" />
    <testimonials id="testimonials" />
    <about id="about" />
    <contact id="contact" />
  </div>
</template>

<script>
import Intro from '../components/pages/index/intro'
import Work from '../components/pages/index/work'
import About from '../components/pages/index/about'
import Testimonials from '../components/pages/index/testimonials'
import Contact from '../components/pages/index/contact'
export default {
  components: {
    Intro,
    About,
    Work,
    Testimonials,
    Contact,
  },
}
</script>

<style>

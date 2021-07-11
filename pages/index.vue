<template>
  <div>
    <intro id="intro" />
    <about id="about" />
    <work id="work" />
    <testimonials id="testimonials" />
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
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Roman Turaj',
    meta: [
      {
        name: 'description',
        content: 'Fullstack Developer working in Vue.js and Node.js',
      },
    ],
  },
}
</script>

<style>

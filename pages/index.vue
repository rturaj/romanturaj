<template>
  <div>
    <intro  id="intro"/>
    <work  id="work"/>
    <about id="about" />
  </div>
</template>

<script>
import Intro from '../components/pages/index/intro'
import Work from '../components/pages/index/work'
import About from '../components/pages/index/about'
export default {
  components: {
    Intro, About, Work
  }
}
</script>

<style>

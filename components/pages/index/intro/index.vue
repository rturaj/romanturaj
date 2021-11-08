<template>
  <section
    class="
      flex
      border-b
      justify-between
      w-full
      border-gray
      items-end
      xs:items-center
    "
  >
    <div class="p-1 md:mt-16 my-4">
      <div class="text-2xl lg:text-4xl leading-none font-light">Hello, I'm</div>
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl sm:leading-tight">
        Roman Turaj
      </h1>
      <h2 class="text-base xs:text-xl sm:text-3xl leading-snug font-light">
        Fullstack Developer
      </h2>
      <icons />
      <div class="flex flex-wrap -ml-2">
        <btn class="m-2 font-bold hidden sm:block" @click="scrollToAbout">
          MEET ME
        </btn>
        <a href="/resume.pdf" target="_blank" aria-label="resume">
          <btn mode="secondary" class="mt-2 sm:m-2 font-bold block">
            GET MY RESUME
          </btn>
        </a>
      </div>
    </div>
    <div
      class="img-bg bg-gray mt-8 sm:mt-16 md:mt-32 w-2/4 duration-1000"
      style="min-width: 100px"
    >
      <img
        src="/intro.png"
        class="-mt-8 sm:-mt-16 md:-mt-32"
        alt="Roman Turaj - image"
      />
    </div>
  </section>
</template>

<script>
import Icons from './Icons'
import Btn from '@/components/ui/Btn'
export default {
  components: {
    Icons,
    Btn,
  },
  methods: {
    scrollToAbout() {
      document.getElementById('about').scrollIntoView()
    },
  },
}
</script>

<style></style>

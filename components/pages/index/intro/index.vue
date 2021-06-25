<template>
  <section class="flex border-b justify-between w-full border-gray">
    <div class="p-1 mt-16">
      <div class="text-4xl leading-none font-light">Hello, I'm</div>
      <h1 class="text-6xl leading-tight">Roman Turaj</h1>
      <h2 class="text-3xl leading-snug font-light">Fullstack Developer</h2>
      <icons />
      <div class="flex">
        <btn class="mr-2"> MEET ME </btn>
        <btn mode="secondary" class="mr-2"> GET MY RESUME </btn>
      </div>
    </div>
    <div class="img-bg bg-gray mt-32">
      <img src="/intro.png" class="-mt-32" />
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
}
</script>

<style></style>

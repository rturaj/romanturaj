<template>
  <section
    class="flex border-b justify-between w-full border-gray items-center"
  >
    <div class="p-1 md:mt-16 my-4">
      <div class="text-2xl lg:text-4xl leading-none font-light">Hello, I'm</div>
      <h1 class="text-4xl lg:text-6xl leading-tight">Roman Turaj</h1>
      <h2 class="text-xl lg:text-4xl leading-snug font-light">
        Fullstack Developer
      </h2>
      <icons />
      <div class="flex flex-wrap -ml-1">
        <btn class="m-1 font-bold"> MEET ME </btn>
        <btn mode="secondary" class="m-1 font-bold"> GET MY RESUME </btn>
      </div>
    </div>
    <div class="img-bg bg-gray mt-16 md:mt-32 w-2/4 hidden xs:block">
      <img src="/intro.png" class="-mt-16 md:-mt-32" />
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

<template>
  <section class="px-2 md:px-4 lg:px-8 border-gray border-b py-8 lg:py-16">
    <h2 class="text-3xl leading-snug text-center pb-8">
      Let's build something together!
    </h2>
    <p class="text-2xl text-center pb-6 sm:pb-12 sm:pt-6">
      hello@romanturaj.com
    </p>

    <form v-if="!sent" id="contact-me" class="w-full mx-auto max-w-2xl" @submit.prevent="send">
      <hr class="text-gray mb-8" />
      <input class="
          py-2
          px-4
          mb-6
          leading-relaxed
          appearance-none
          block
          w-full
          border border-gray
          rounded
          focus:outline-none
          focus:border-black
        " id="email" type="text" placeholder="Your email" v-model="sendData.email" @blur="$v.sendData.email.$touch"
        :class="{
          'border-red': $v.sendData.email.$anyError,
          'border-green': !$v.sendData.email.$invalid,
        }" />
      <textarea class="
          autoexpand
          py-2
          px-4
          mb-3
          appearance-none
          w-full
          border border-gray
          rounded
          focus:outline-none
          focus:border-black
        " id="message" v-model="sendData.message" @blur="$v.sendData.message.$touch" :class="{
          'border-red': $v.sendData.message.$anyError,
          'border-green': !$v.sendData.message.$invalid,
        }" type="text" rows="10" placeholder="Message"></textarea>
      <div class="text-center">
        <btn> Send </btn>
      </div>
      <div v-if="err" class="
          p-4
          text-2xl text-center
          bg-red
          text-white
          rounded-md
          my-4
          max-w-xl
          mx-auto
        ">
        {{ err }}
      </div>
    </form>
    <div v-else class="
        p-8
        text-2xl text-center
        bg-green
        text-white
        rounded-md
        my-4
        max-w-xl
        mx-auto
      ">
      Thank you for your message!
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { required, email } from 'vuelidate/lib/validators'

import Btn from '@/components/ui/Btn'
export default {
  components: {
    Btn,
  },
  data() {
    return {
      err: null,
      sendData: {
        content: null,
        email: null,
      },
      sent: false,
    }
  },
  validations: {
    sendData: {
      email: {
        required,
        email,
      },
      message: {
        required,
      },
    },
  },
  methods: {
    async send() {
      this.err = null
      this.$v.sendData.$touch()
      if (!this.$v.sendData.$invalid) {
        try {
          const response = await axios.post(
            'https://formcarry.com/s/FEUatNs2P9E',
            this.sendData
          )
          if (response.status === 200) {
            this.sent = true
          }
        } catch (err) {
          this.err = err.response.data.message
        }
      }
    },
  },
}
</script>

<style></style>

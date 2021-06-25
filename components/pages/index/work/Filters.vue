<template>
  <div class="flex justify-center mb-8">
    <btn
      class="m-2"
      @click="$emit('input', null)"
      :mode="value === null ? 'primary' : 'secondary'"
    >
      all
    </btn>
    <btn
      class="m-2"
      @click="$emit('input', 'open-source')"
      :mode="value === 'open-source' ? 'primary' : 'secondary'"
    >
      open-source
    </btn>
    <btn
      class="m-2"
      @click="$emit('input', 'public')"
      :mode="value === 'public' ? 'primary' : 'secondary'"
    >
      public
    </btn>

    <btn
      class="m-2"
      @click="$emit('input', 'private')"
      :mode="value === 'private' ? 'primary' : 'secondary'"
    >
      private
    </btn>
  </div>
</template>

<script>
import Btn from '@/components/ui/Btn'
export default {
  props: {
    value: {},
  },
  components: {
    Btn,
  },
}
</script>

<style></style>

<template>
  <v-btn size="x-large" color="white" @click="$emit('click')">{{text}}</v-btn>
</template>

<script >
export default {
  props: {
    text: String
  }
}
</script>

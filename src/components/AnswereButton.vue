<template>
  <div>
    <v-btn :rounded="0" size="x-large" color="white" >{{
      text
    }}</v-btn>
  </div>
</template>
<script >
export default {
  props: {
    text: String,
  },
};
</script>
<style scoped>
.v-btn {
  min-width: 350px;
}
</style>

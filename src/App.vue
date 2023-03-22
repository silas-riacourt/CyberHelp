<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
  //
</script>
<script>
export default {
 
  mounted(){
    console.log(this.$route)

  },
}
</script>
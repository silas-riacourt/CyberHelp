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
    if(this.$route.fullPath == '/'){
      this.$router.push("/home")
    }

  },
}
</script>
<style>
body {
  overflow: hidden !important; /* Hide scrollbars */
}
</style>
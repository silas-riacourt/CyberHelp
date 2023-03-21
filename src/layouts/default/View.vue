<template>
  <v-main>
    <v-row justify="center" align="center">
      <v-col cols="8" class="text-center">
    <router-view class="mt-4"/>
      </v-col>
    </v-row>

  </v-main>
</template>

<script setup>
  //
</script>
<style scoped>
.v-main {
  background-image:  url("@/assets/bg.jpg");
  background-size: cover;
      background-position-y: 60px;
}
</style>
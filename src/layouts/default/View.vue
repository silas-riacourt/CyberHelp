<template>
  <v-main class="d-flex">
    <v-row justify="center" align="center">
      <v-col cols="8" class="text-center">
        <router-view />
      </v-col>
      <v-col cols="12"></v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  name: 'ViewComponenet',
};
</script>
<style scoped>
.v-main {
  background-image: url("@/assets/bg.jpg");
  background-size: cover;
  background-position-y: 60px;
}
</style>

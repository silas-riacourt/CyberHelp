<template>
  <v-app-bar color="black">
    <v-row justify="center" align="center">
      <v-col cols="2">
        <h2 class="pl-2">CYBERHELP</h2>
      </v-col>
      <v-col cols="8" class="text-center">
        <v-btn to="/Home">Mes conseils</v-btn>
        <v-btn to="/About">A propos</v-btn>
        <v-btn to="/Contact">Contact</v-btn>
      </v-col>
      <v-col cols="2"> </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
  //
</script>
<style>
.v-btn--active {
  border-bottom: 4px solid white !important;
}
</style>

<template>
  <v-app-bar color="black">
    <v-row justify="center" align="center">
      <v-col cols="2" >
        <h2 class="pl-2">CYBERHELP</h2>
      </v-col>
      <v-col cols="8" class="text-center">
        <v-btn active selected-class="underline">Mes conseils</v-btn>
        <v-btn>A propos</v-btn>
        <v-btn>Contact</v-btn>
      </v-col>
      <v-col cols="2"> </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
  //
</script>
<style>
.underline {
  text-decoration: underline;
}
</style>

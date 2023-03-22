<template>
  <v-card :rounded="0">
    <v-card-title class="text-uppercase"
      ><v-icon size="x-large" color="black" start>{{
        `mdi-numeric-${index + 1}-circle`
      }}</v-icon>
      {{ advice.titre }}</v-card-title
    >

    <v-card-text>{{ advice.description }}</v-card-text>
  </v-card>
</template>
<script >
export default {
  data() {
    return {

    }
  },
    props: {
    advice: Object,
    index: Number
  },
    mounted(){

  },
    methods: {

  }
}
</script>
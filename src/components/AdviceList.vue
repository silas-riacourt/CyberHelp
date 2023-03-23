<template>
  <div class="mt-4">
    <h3 class="text-h3 text-uppercase text-white">
      Voici vos conseils personnalisés
    </h3>

    <v-row justify="center" class="mt-4">
      <v-col cols="10" class="mb-4">
        <v-btn
          @click="$emit('restart')"
          :rounded="0"
          size="x-large"
          color="white"
          >Recommencer le questionnaire <v-icon end icon="mdi-restart"></v-icon
        ></v-btn>
      </v-col>
      <v-col cols="10">
        <AdviceCard
          class="text-left mb-4"
          v-for="(advice, index) in advices"
          :key="index"
          :advice="advice"
          :index="index"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import AdviceCard from '@/components/AdviceCard.vue';
</script>
<script >
export default {
  data() {
    return {

    }
  },
    props: {
    advices: Object
  },
    mounted(){

  },
    methods: {
        
  }
}
</script>

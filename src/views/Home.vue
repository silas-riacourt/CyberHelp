<template>
  <v-card color="white" height="max-content" class="main--card" min-height="fit-content">
    <v-card-title class="text-uppercase text-white">
      <h1>{{question}}</h1>
    </v-card-title>

  <QuestionButton text="Je suis un particulier" @click="console.log('click')"></QuestionButton>
    <QuestionButton text="Je suis un particulier" @click="console.log('click')"></QuestionButton>
  </v-card>
</template>

<script setup>
import QuestionButton from '@/components/QuestionButton.vue';
 
 
</script>
<script>
export default {
  data() {
    return {
      question: 'êtes-vous un particulier ou un professionnel ?'
    }
  }
}
</script>

<style>
.main--card {
 
  background-color: rgba(16, 15, 15, 0.60)!important;
}
</style>

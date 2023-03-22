<template>
  <div class="ma-4">
    <v-card-title class="text-uppercase text-white">
      <h1>{{question}}</h1>
    </v-card-title>
 <v-img
 class="ma-8"
        contain
        height="200"
        src="@/assets/question.svg"
      />
  <QuestionButton text="Je suis un pro" @click="console.log('click')"></QuestionButton>
    <QuestionButton  class="mt-4" text="Je suis un particulier" @click="console.log('click')"></QuestionButton>
  </div>
</template>
<script setup>
import QuestionButton from '@/components/QuestionButton.vue';
 
 
</script>
<script >
export default {
  data() {
    return {
      question: 'êtes-vous un particulier ou un professionnel ?'
    }
  }
}
</script>

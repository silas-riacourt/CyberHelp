<template>
  <v-card  color="white" height="max-content" class="main--card" min-height="fit-content">

  <Question></Question>
  </v-card>
</template>

<script setup>
import Question from '@/components/Question.vue';
 
 
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

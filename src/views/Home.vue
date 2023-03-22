<template>
  <v-card  color="white" height="max-content" class="main--card" min-height="fit-content">

  <Question :question="questions[0]"></Question>
  </v-card>
</template>

<script setup>
import Question from '@/components/Question.vue';
 
 
</script>
<script>
export default {
  data() {
    return {
      questions:[         {
            "id": 1,
            "question": "Quel type de personne êtes-vous ?",
            "answers": [
                {
                    "text": "Particulier",
                    "tags": "particulier",
                    "nextQuestion": 2
                },
                {
                    "text": "Professionnel",
                    "tags": "pro",
                    "nextQuestion": 3
                }
            ]
        },
    ]}
  }
}
</script>

<style>
.main--card {
 
  background-color: rgba(16, 15, 15, 0.60)!important;
}
</style>

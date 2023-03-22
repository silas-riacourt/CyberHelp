<template>
  <v-card
    color="white"
    height="max-content"
    class="main--card"
    min-height="fit-content"
  >
    <Question :question="selectedQuestion" @answere="answere"></Question>
  </v-card>
</template>

<script setup>
import Question from '@/components/Question.vue';
 
 
</script>
<script>
export default {
  data() {
    return {
      selectedQuestion: {},
      questions:[         
        {
            "id": 1,
            "question": "Quel type de personne êtes-vous ?",
            "answers": [
                {
                    "text": "Je suis un particulier",
                    "tags": "particulier",
                    "nextQuestion": 2
                },
                {
                    "text": "Je suis un professionnel",
                    "tags": "pro",
                    "nextQuestion": 3
                }
            ]
        },
        {
            "id": 2,
            "question": "Disposez-vous d'une connexion wifi ?",
            "answers": [
                {
                    "text": "Oui",
                    "tags": "particulier",
                    "nextQuestion": 2
                },
                {
                    "text": "Non",
                    "tags": "pro",
                    "nextQuestion": 3
                }
            ]
        },
    ]}
  },
  mounted(){
    this.selectedQuestion = this.questions[0]
  },
  methods: {
    answere(answere){
      const nextQuestion = this.questions.find((question ) => question.id == answere.nextQuestion);
      this.selectedQuestion = nextQuestion
    }
  }
}
</script>

<style>
.main--card {
  background-color: rgba(16, 15, 15, 0.6) !important;
}
</style>

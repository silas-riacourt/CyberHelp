<template>
  <v-card
    v-if="!loading"
    color="white"
    height="max-content"
    class="main--card"
    min-height="fit-content"
  >
    <v-progress-linear v-model="progress" color="white" height="25">
    </v-progress-linear>
    <QuestionBloc
      v-if="selectedQuestion != null"
      :question="selectedQuestion"
      @answere="answere"
    ></QuestionBloc>
    <AdviceList v-else :advices="advices" @restart="restart()"></AdviceList>
  </v-card>
  <v-card
    v-else
    color="white"
    height="max-content"
    class="main--card"
    min-height="fit-content"
  >
    <h3 class="text-h3 text-uppercase text-white">
      Chargement des questions...
    </h3>
    <v-progress-circular
      class="mt-6"
      :size="100"
      color="white"
      indeterminate
    ></v-progress-circular>
  </v-card>
</template>

<script setup>
import QuestionBloc from '@/components/QuestionBloc.vue';
import AdviceList from '@/components/AdviceList.vue';
</script>
<script>
export default {
  data() {
    return {
      progress: 10,
      loading: true,
      selectedQuestion: {},
      advices: [
        {
            "id": 1,
            "titre": "Avoir un mot de passe complex",
            "description": "ckdslfdsichdsufcjhxcjsujhcsghckgshqchdsvchjvsqhfcdsvjfcjdsbfsdjb",
            "tags": [
                "password",
                "users"
            ]
        },
        {
            "id": 2,
            "titre": "Exemple conseil perso",
            "description": "ckdslfdsichdsufcjhxcjsujhcsghckgshqchdsvchjvsqhfcdsvjfcjdsbfsdjb",
            "tags": [
                "particulier",
                "users"
            ]
        }
    ],
      questions:[         
        
    ]}
  },
  mounted(){
    this.selectedQuestion = this.questions[0]
          setTimeout(() => this.loading = false, 1000);
      this.getData()

  },
  methods: {
    restart(){
       this.selectedQuestion = this.questions[0]
      this.progress = 0
    },
    answere(answere){
            console.log(answere)
      if(answere.nextQuestion == -1){
         this.selectedQuestion = null
              this.progress = 100
      }else{
      const nextQuestion = this.questions.find((question ) => question.id == answere.nextQuestion);

      this.selectedQuestion = nextQuestion
      this.progress +=10
      }


    },
    getData(){
      console.log("get data")
      fetch("model.json")
        .then(response => response.json())
        .then(data => {
          this.questions = data.questions
          this.selectedQuestion = this.questions[0]
          this.advices = data.advices
        });
    },
    stopLoading(){
          this.loading = false
    }
  }
}
</script>

<style>
.main--card {
  background-color: rgba(16, 15, 15, 0.6) !important;
}
</style>

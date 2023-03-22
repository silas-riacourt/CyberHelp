<template>
  <v-card
    v-if="!loading && startQuizz"
    color="white"
    height="max-content"
    class="main--card"
    min-height="fit-content"
  >
    <v-progress-linear v-model="progress" color="white" height="16">
    </v-progress-linear>
    <QuestionBloc
      v-if="selectedQuestion != null"
      :question="selectedQuestion"
      @answere="answere"
    ></QuestionBloc>
    <AdviceList
      v-else
      :advices="selectedAdvices"
      @restart="restart()"
    ></AdviceList>
  </v-card>
  <v-card
    v-if="!startQuizz"
    color="white"
    height="max-content"
    class="main--card"
    min-height="fit-content"
  >
    <h3 class="text-h3 text-uppercase text-white">
      Bienvenue sur votre notre questionnaire personnalisé sur la cybersécurité
    </h3>
    <v-row justify="center" class="mt-4">
      <v-col cols="10">
        <p class="text-white text-justify">
          Un quiz sur les usages des outils numériques pour la cybersécurité a
          pour but de sensibiliser les utilisateurs aux risques liés à
          l'utilisation des technologies numériques et de leur fournir des
          conseils personnalisés pour améliorer leur sécurité en ligne. Le quiz
          évalue les connaissances des utilisateurs sur les pratiques de
          sécurité de base telles que la création de mots de passe forts,
          l'installation de logiciels de sécurité, la reconnaissance des
          tentatives de phishing et d'autres formes d'attaques. En fonction des
          réponses de l'utilisateur, le quiz génère des conseils personnalisés
          pour améliorer leur sécurité en ligne et les aide à prendre les
          mesures appropriées pour protéger leurs données et leur vie privée. Le
          quiz est donc un outil efficace pour améliorer la sensibilisation à la
          cybersécurité et encourager les utilisateurs à adopter des
          comportements plus sûr
        </p>
      </v-col>
    </v-row>
    <v-img class="ma-8" contain height="200" src="@/assets/security.svg" />
    <v-btn
      class="mb-4"
      :rounded="0"
      size="x-large"
      color="white"
      @click="startQuizz = true"
      style="min-width: 200px"
      >Démarrer</v-btn
    >
  </v-card>
  <v-card
    v-if="loading && startQuizz"
    color="white"
    height="max-content"
    class="main--card"
    min-height="fit-content"
  >
    <h3 class="text-h3 text-uppercase text-white">
      Chargement des questions...
    </h3>
    <v-progress-circular
      class="my-6"
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
      startQuizz: false,
      selectedAdvices: [],
      userTags: [],
      progress: 0,
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
       this.userTags = []
    },
    answere(answere){
            console.log(answere)
            if(!this.userTags.includes(answere.tags)){
            this.userTags = this.userTags.concat(answere.tags)
            }

      if(answere.nextQuestion == -1){
         this.selectedQuestion = null
          this.progress = 100
          //this.selectedAdvices = this.advices;
          const customAdvices = []
          this.advices.forEach(advice => {
            if(this.userTags.includes(advice.tag)){
                customAdvices.push(advice)
            }
          });
            this.selectedAdvices = customAdvices
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

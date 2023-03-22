<template>
  <div class="ma-4">
    <h3 class="text-h3 text-uppercase text-white">{{ question.question }}</h3>

    <v-img class="ma-8" contain height="200" src="@/assets/question.svg" />
    <AnswereButton
      class="my-4"
      v-for="(answer, index) in question.answers"
      :key="index"
      :text="answer.text"
      @click.stop="answere(answer)"
    ></AnswereButton>
  </div>
</template>
<script setup>
import AnswereButton from '@/components/AnswereButton.vue';
 
 
</script>
<script >
export default {
  data() {
    return {

    }
  },
    props: {
    question: Object
  },
    mounted(){

    console.log("debug")
  },
    methods: {
    answere(answere){
        this.$emit("answere",answere)
    }
  }
}
</script>

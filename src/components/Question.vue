<template>
  <div class="ma-4">
    <h3 class="text-h3 text-uppercase text-white">{{ question.question }}</h3>

    <v-img class="ma-8" contain height="200" src="@/assets/question.svg" />
    <AnswereButton
      text="Je suis un pro"
      @click="console.log('click')"
    ></AnswereButton>
    <AnswereButton
      class="mt-4"
      text="Je suis un particulier"
      @click="console.log('click')"
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
  }
}
</script>

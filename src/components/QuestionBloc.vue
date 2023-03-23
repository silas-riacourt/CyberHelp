<template>
  <div class="ma-4">
    <h3 class="text-h3 text-uppercase text-white">{{ question.question }}</h3>

    <v-img class="ma-8" contain height="200" src="@/assets/question.svg" />
    <AnswereButton
      class="my-4"
      v-for="(answer, index) in question.answers"
      :key="index"
      :text="answer.text"
      @click="answere(answer,$event)"
    ></AnswereButton>
  </div>
</template>
<script setup>
// eslint-disable-next-line import/no-unresolved
import AnswereButton from '@/components/AnswereButton.vue';

</script>
<script >
export default {
  data() {
    return {

    };
  },
  props: {
    question: Object,
  },

  methods: {

    answere(answere, event) {
      if (event) {
        event.preventDefault();
      }
      this.$emit('answere', answere);
    },
  },
};
</script>

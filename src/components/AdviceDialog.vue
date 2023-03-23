<template>
  <v-dialog
    min-width="fit-content"
    max-width="1200px"
    v-model="showDialog"
    persistent
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ advice.titre }}</span>
      </v-card-title>
      <v-card-text>
        <div v-html="advice.description"></div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green-darken-1" variant="text" @click="close()">
          Fermer
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script >
export default {
  data() {
    return {
      showDialog: true,
    };
  },
  props: {
    advice: Object,
  },
  mounted() {

  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

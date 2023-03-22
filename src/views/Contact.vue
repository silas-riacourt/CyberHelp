<template>
  <form action="traitement.php" method="post">
    <div class="main_title">
      <h2>Laissez-nous un message</h2>
    </div>
    <div class="wrapper">
      <div class="contact">
        <v-text-field my="5" label="Votre nom"></v-text-field>
      </div>

      <div class="contact">
        <v-text-field label="Votre mail" my="5"></v-text-field>
      </div>

      <div class="contact">
        <v-text-field label="Objet du message" my="5"></v-text-field>
      </div>

      <div class="contact">
        <v-textarea name="input-7-1" label="Votre message" my="5"></v-textarea>
      </div>

      <v-btn color="grey">Envoyer</v-btn>
    </div>
  </form>
</template>

<style>
.main_title {
  color: white;
  margin: 15px 0;
  text-transform: uppercase;
}
.wrapper {
  color: white;
  padding: 5px 0;
  background-color: rgba(16, 15, 15, 0.6);
}
.contact {
  margin: 15px;
}
.contact input,
.contact textarea {
  border-radius: 2px;
}
button {
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 2px;
}
</style>
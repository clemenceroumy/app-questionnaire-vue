<template>
  <v-card>
    <v-card-title>
      <h2>{{`${number} - `}}Une question ?</h2>
    </v-card-title>

    <v-card-text>
      <v-checkbox
        label="Reponse 1"
      ></v-checkbox>

      <v-checkbox
        label="Reponse 2"
      ></v-checkbox>

      <v-checkbox
        label="Reponse 3"
      ></v-checkbox>

      <v-checkbox
        label="Reponse 4"
      ></v-checkbox>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Question',
  props: ['number']
}
</script>

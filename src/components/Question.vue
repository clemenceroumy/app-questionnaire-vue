<template>
  <v-card>
    <v-card-title>
      <h2>{{`${question.id} - ${question.question}`}}</h2>
    </v-card-title>

    <v-card-text>
      <v-list>
        <v-list-item v-for="(answer,index) in question.answers" :key="index">
          <v-checkbox
            :label="answer.answer"
            :value="answer.id"
          ></v-checkbox>
        </v-list-item>
      </v-list>
      <!--<v-checkbox
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
      ></v-checkbox>-->
    </v-card-text>

    <v-card-actions>
      <v-btn @click="action">
        {{text}}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Question',
  props: ['action', 'text', 'question']
}
</script>

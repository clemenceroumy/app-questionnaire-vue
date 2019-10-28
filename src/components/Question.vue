<template>
  <v-card>
    <v-card-title>
      <h2>{{`${question.id} - ${question.question}`}}</h2>
    </v-card-title>

    <v-card-text>

      <v-list>
        <v-list-item v-for="(answer,index) in question.answers" :key="index">
          <v-checkbox
            v-model="answers"
            :label="answer.answer.toString()"
            :value="answer.id"
          ></v-checkbox>
        </v-list-item>
      </v-list>
    </v-card-text>

    <v-card-actions>
      <v-btn @click="emitAnswer">
        {{text}}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Question',
  props: ['question', 'text'],
  data() {
   return {
     answers: [],
   }
  },
  methods: {
    emitAnswer(){
      this.$emit('answerToQuestion', this.answers)
      this.$emit('updateCounter', this.question.id + 1)
      this.answers = []
    }
  }
}
</script>

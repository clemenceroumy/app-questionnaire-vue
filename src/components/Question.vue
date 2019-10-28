<template>
  <v-card elevation="0" color="#282d49">
    <v-card-title>
      <v-col cols="12">
        <v-row justify="center">
          <h4 class="white--text">{{`${question.id}) ${question.question}`}}</h4>
        </v-row>
      </v-col>
    </v-card-title>

    <v-card-text>
      <v-col cols="12">
        <v-list color="#282d49">
          <v-list-item v-for="(answer,index) in question.answers" :key="index">
            <v-row class="ma-2" style="border: 1px solid #595d7f;">
              <v-checkbox
                class="mx-3"
                dark
                color="#0ec4cf"
                v-model="answers"
                :label="answer.answer.toString()"
                :value="answer.id"
              ></v-checkbox>
            </v-row>
          </v-list-item>
        </v-list>
      </v-col>

    </v-card-text>

    <v-card-actions>
      <v-col cols="12" sm="11">
        <v-row justify="end">
          <v-btn class="pa-5" dark color="#0ec4cf" @click="emitAnswer">
            {{text}}
          </v-btn>
        </v-row>
      </v-col>
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

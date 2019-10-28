<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8">

        <v-row>
          <p>{{`${user.firstName} ${user.lastName}`}}</p>
        </v-row>

        <v-row>
          <h1 class="mx-auto">Questionnaire</h1>
        </v-row>

        {{`score: ${score}/10`}}

        <Question :question="questions[counter - 1]"
                  :text="counter < 10 ? 'Suivant' : 'Resultat'"
                  v-on:answerToQuestion="getAnswerFromChild"
                  v-on:updateCounter="(value) => counter = value"
        />

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import Question from '../components/Question'
import PouchDB from 'pouchdb'
import data from '../statics/questions'

var db = new PouchDB('my_database')

export default {
  name: 'Survey',
  components: { Question },
  data() {
    return {
      user: '',
      counter: 1,
      questions: data.questions,
      answers: [],
      score: 0
    }
  },
  created () {
    db.get('user').then(user => this.user = user)
  },
  methods: {
    getAnswerFromChild(value){

      this.updateScore(value)

      if(this.counter === 10){


        db.get('user').then(doc => {
          db.put({
            _id: 'user',
            _rev: doc._rev,
            firstName: doc.firstName,
            lastName: doc.lastName,
            company: doc.company,
            score: this.score
          }).then(() => this.$router.push('/result')).catch(e => console.log(e))
        })
          .catch(function (err) {
          console.log(err);
        })
      }
    },

    updateScore(value){
      let conditionEach = value.every(answer => {
          return this.questions[this.counter - 1].correctAnswer.includes(answer)
        }
      );

      let conditionSize = this.questions[this.counter - 1].correctAnswer.length === value.length;

      if(conditionEach && conditionSize){
        this.score++;
      }
    }
  }
}
</script>

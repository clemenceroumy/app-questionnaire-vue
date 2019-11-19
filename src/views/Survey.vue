<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8">

        <v-card color="#282d49">
          <v-card-title>
            <v-col cols="12">
              <v-row align="space-between" class="pa-2">
                <v-col cols="8">
                  <v-row align="center">
                    <v-avatar color="#0ec4cf" size="28">
                      <v-icon size="12" dark>mdi-account</v-icon>
                    </v-avatar>

                    <h5 class="px-2 white--text">{{`${user.firstName} ${user.lastName}`}}</h5>
                  </v-row>
                </v-col>

                <v-col cols="4">
                  <v-row justify="end">
                    <h5 class="white--text">{{`Question ${counter} sur 10`}}</h5>
                  </v-row>
                </v-col>
              </v-row>

              <v-row>
                <v-divider dark></v-divider>
              </v-row>
            </v-col>
          </v-card-title>

          <v-card-text>
            <Question :question="questions[counter - 1]"
                      :text="counter < 10 ? 'Suivant' : 'Resultat'"
                      v-on:answerToQuestion="getAnswerFromChild"
                      v-on:updateCounter="(value) => counter = value"
            />
          </v-card-text>
        </v-card>

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
    //ON SUMBIT ANSWER
    getAnswerFromChild(value){

      this.updateScore(value)

      //WHILE NUMBER OF QUESTIONS IS INFERIOR TO 10
      if(this.counter === 10){

        //UPDATE USER IN POUCHDB WITH HIS SCORE
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
      //EACH ANSWER SUBMITED BY USER IS IN THE LIST OF ANSWERS EXPECTED
      let conditionEach = value.every(answer => {
          return this.questions[this.counter - 1].correctAnswer.includes(answer)
        }
      );

      //AS MANY ANSWERS SUBMITED AS ANSWERS EXPECTED
      let conditionSize = this.questions[this.counter - 1].correctAnswer.length === value.length;

      if(conditionEach && conditionSize){
        this.score++;
      }
    }
  }
}
</script>

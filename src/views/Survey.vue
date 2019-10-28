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

        <Question :question="questions[counter - 1]" :text="counter < 10 ? 'Suivant' : 'Resultat'" :action="() => counter < 10 ? counter++ : this.$router.push('/result')"/>

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
    }
  },
  created () {
    db.get('user').then(user => this.user = user)
  }
}
</script>

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

        <v-list color="transparent">
          <v-list-item :key="n" v-for="n in 10">
            <v-row justify="center">
              <v-col cols="12">
                <Question :number="n" />
              </v-col>
            </v-row>
          </v-list-item>

        </v-list>

        <v-row>
            <v-btn class="mx-auto">
              <h5>Confirmer</h5>
            </v-btn>
        </v-row>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import Question from '../components/Question'
import PouchDB from 'pouchdb'
var db = new PouchDB('my_database')

export default {
  name: 'Survey',
  components: { Question },
  data() {
    return {
      user: ''
    }
  },
  created () {
    db.get('user').then(user => this.user = user)
  }
}
</script>

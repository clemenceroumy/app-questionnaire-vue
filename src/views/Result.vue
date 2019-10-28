<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" align="center">

          <v-card class="pa-5">
            <v-card-title>
              <h1 class="mx-auto">Resultat</h1>
            </v-card-title>

            <v-card-text>
              <p>{{`${user.firstName} ${user.lastName}, vous avez obtenu`}}</p>
              <h2>{{`${user.score} / 10`}}</h2>
            </v-card-text>

            <v-card-actions>
              <v-btn class="mx-auto">Fin</v-btn>
            </v-card-actions>
          </v-card>


      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import PouchDB from 'pouchdb'
  var db = new PouchDB('my_database')

  export default {
    name: 'Result',
    data(){
      return {
        user: ''
      }
    },
    created () {
      db.get('user').then(user => this.user = user).catch(e => console.log(e))
    }
  }
</script>


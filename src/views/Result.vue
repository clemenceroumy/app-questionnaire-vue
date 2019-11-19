<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" align="center">

          <v-card class="pa-5" color="#282d49">
            <v-card-title>
              <h2 class="mx-auto white--text">Résultat</h2>
            </v-card-title>

            <v-card-text>
              <h4 class="white--text ma-2">{{`${user.firstName} ${user.lastName}, vous avez obtenu`}}</h4>
              <h1 class="white--text ma-5">{{`${user.score} / 10`}}</h1>
            </v-card-text>

            <v-card-actions>
              <v-btn dark color="#0ec4cf" @click="disconnect" class="mx-auto pa-5">Envoyer votre résultat</v-btn>
            </v-card-actions>
          </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import PouchDB from 'pouchdb'
  import FirebaseDAO from '../dao/firebase'
  var db = new PouchDB('my_database')

  export default {
    name: 'Result',
    data(){
      return {
        user: ''
      }
    },
    created () {
      //HYDRATE USER WITH POUCHDB DATA
      db.get('user').then(user => this.user = user).catch(e => console.log(e))
    },
    methods:{
      disconnect(){
        db.get('user').then(doc => {
          //PERSIST SCORE AND USER INTO FIREBASE DATABASE
          FirebaseDAO.saveResult(doc)

          //REMOVE USER FROM LOCAL POUCHDB AND REDIRECT TO LOGIN
          db.remove(doc).then(() => this.$router.push('/'))
        }).catch(e => console.log(e))
      }
    }
  }
</script>


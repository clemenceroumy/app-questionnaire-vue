<template>
  <v-container>
    <v-col cols="12">
      <v-row align="space-between" class="pa-2">
        <v-col cols="8">
          <v-row align="center">
            <h1 class="white--text">Résultats des employés de {{ admin.company }}</h1>
          </v-row>
        </v-col>

        <v-spacer></v-spacer>

        <v-col>
          <v-row>
            <v-btn dark color="#0ec4cf" @click="disconnect" class="mx-auto pa-5">
              <h5>Déconnexion</h5>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-divider dark></v-divider>
      </v-row>
    </v-col>

    <v-simple-table dark>
      <template v-slot:default>
        <thead style="background-color: #0ec4cf">
          <tr>
            <th class="text-left">Nom</th>
            <th class="text-left">Prénom</th>
            <th class="text-left">Note</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(result,index) in results" :key="index">
            <td>{{ result.firstName }}</td>
            <td>{{ result.lastName }}</td>
            <td>{{ `${result.score} / 10` }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
  import PouchDB from 'pouchdb'
  import FirebaseDAO from '../dao/firebase'
  var db = new PouchDB('my_database')

  export default {
    name: 'Dashboard',
    data(){
      return {
        admin: '',
        results: []
      }
    },
    created () {
      db.get('admin').then(admin => {
        this.admin = admin
        FirebaseDAO.getResultsAdmin(admin.company).then(data => {
          this.results = data
        })
      })
    },
    methods: {
      disconnect(){
        db.get('admin').then(doc => {
          //REMOVE USER FROM LOCAL POUCHDB AND REDIRECT TO LOGIN
          db.remove(doc).then(() => this.$router.push('/'))
        }).catch(e => console.log(e))
      }
    }
  }
</script>

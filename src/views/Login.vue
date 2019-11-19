<template>
  <div class="home">
    <v-row no-gutters justify="center">
      <v-col
        cols="12"
        sm="6"
      >
        <v-card class="ma-5 pa-2" color="#282d49">
          <v-card-title>
            <h1 class="headline mx-auto white--text">Connexion</h1>
          </v-card-title>

          <v-card-text>
            <v-row justify="center">
              <v-col cols="10">
                <!-- FIRSTNAME -->
                <v-text-field dark label="Prénom" v-model="firstName">
                </v-text-field>

                <!-- LASTNAME -->
                <v-text-field dark label="Nom" v-model="lastName">
                </v-text-field>

                <!-- COMPANY -->
                <v-text-field dark label="Entreprise" v-model="company">
                </v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-col sm12>
              <v-row class="pa-5">
                <v-btn dark color="#0ec4cf" @click="login" class="mx-auto pa-5">
                  <h5>Commencer le test</h5>
                </v-btn>
              </v-row>

              <v-row justify="center">
                <router-link to="/loginAdmin" style="color: #0ec4cf; text-decoration: none">Administrateur ?</router-link>
              </v-row>
            </v-col>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>
  </div>
</template>

<script>
import PouchDB from 'pouchdb'
var db = new PouchDB('my_database')

export default {
  name: 'login',
  data () {
    return {
      firstName: '',
      lastName: '',
      company: ''
    }
  },
  created(){
    //SET PASSWORD FOR ADMIN USER (WHEN APP IS LAUNCHED)
    db.get('admin').then(doc => {
      db.put({
        _id: 'admin',
        _rev: doc._rev,
        password: 'admin'
      })
    }).catch(e => {
      db.put({
        _id: 'admin',
        password: 'admin'
      })
    })
  },
  methods: {
    login () {
      //SAVE USER TO LOCAL POUCHDB
      db.get('user')
        .then(doc => {
          doc.firstName = this.firstName
          doc.lastName = this.lastName
          doc.company =  this.company
          return db.put(doc)
          .then(() => this.$router.push('/survey')).catch(e => console.log(e))
        }).catch(e => {
          db.put({
            _id: "user",
            firstName: this.firstName,
            lastName: this.lastName,
            company: this.company
          })
      })
    }
  }
}
</script>

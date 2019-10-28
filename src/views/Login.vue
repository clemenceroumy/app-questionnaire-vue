<template>
  <div class="home">
    <v-row no-gutters justify="center">
      <v-col
        cols="12"
        sm="6"
      >
        <v-card class="ma-5 pa-2">
          <v-card-title>
            <h1 class="headline mx-auto">Connexion</h1>
          </v-card-title>

          <v-card-text>
            <v-row justify="center">
              <v-col cols="10">
                <!-- FIRSTNAME -->
                <v-text-field label="Prénom" v-model="firstName">
                </v-text-field>

                <!-- LASTNAME -->
                <v-text-field label="Nom" v-model="lastName">
                </v-text-field>

                <!-- COMPANY -->
                <v-text-field label="Entreprise" v-model="company">
                </v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="login" class="mx-auto">
              <h5>Commencer le test</h5>
            </v-btn>
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
  methods: {
    login () {
      db.put({
        _id: 'user',
        firstName: this.firstName,
        lastName: this.lastName,
        company: this.company
      }).then(() => this.$router.push('/survey')).catch(e => console.log(e))
    }
  }
}
</script>

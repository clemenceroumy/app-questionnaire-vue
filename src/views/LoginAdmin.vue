<template>
  <div>
    <v-row no-gutters justify="center">
      <v-col
        cols="12"
        sm="6"
      >
        <v-card class="ma-5 pa-2"  color="#282d49">
          <v-card-title>
            <v-col cols="12">
              <v-row>
                <a style="font-size: 14px; color: #0ec4cf" @click="$router.go(-1)">Annuler</a>
              </v-row>

              <v-row justify="center">
                <h1 class="headline mx-auto white--text">Connexion Administrateur</h1>
              </v-row>
            </v-col>
          </v-card-title>

          <v-card-text>
            <v-row justify="center">
              <v-col cols="10">

                <v-alert type="error" v-if="errorLogin !== ''">
                  {{errorLogin}}
                </v-alert>

                <!-- COMPANY -->
                <v-text-field dark label="Entreprise" v-model="company">
                </v-text-field>

                <!-- PASSWORD -->
                <v-text-field dark label="Mot de passe" v-model="password">
                </v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn dark color="#0ec4cf" @click="login" class="mx-auto pa-5">
              <h5>Connexion</h5>
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
    name: 'LoginAdmin',
    data(){
      return {
        firstName: "",
        lastName: '',
        company: '',
        password: '',
        errorLogin: ''
      }
    },
    methods: {
      login(){
        db.get('admin').then(admin => {
          //SAVE ADMIN TO LOCAL POUCHDB IF PASSWORD IS OK
          if(admin.password === this.password){
            db.put({
              _id: 'admin',
              _rev: admin._rev,
              company: this.company,
              password: admin.password
            }).then(() => this.$router.push('/dashboard'))
          }else{
            this.errorLogin = "Mot de passe incorrect"
          }
        })
      }
    }
  }
</script>

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
            <v-btn class="mx-auto" to="survey">
              <h5>Commencer le test</h5>
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      firstName: '',
      lastName: '',
      company: ''
    }
  }
}
</script>

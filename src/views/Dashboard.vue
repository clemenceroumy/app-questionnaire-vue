<template>
  <v-container>
    {{admin}}
  </v-container>
</template>

<script>
  import PouchDB from 'pouchdb'
  var db = new PouchDB('my_database')

  export default {
    name: 'Dashboard',
    data(){
      return {
        admin: ''
      }
    },
    created () {
      db.get('admin').then(admin => this.admin = admin)
    }
  }
</script>

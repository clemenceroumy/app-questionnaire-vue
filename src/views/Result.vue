<template>
  <div>
    <h1>Result</h1>
    <p>{{`${user.firstName} ${user.lastName}, vous avez obtenu`}}</p>
    <h2>{{`${user.score} / 10`}}</h2>
  </div>
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


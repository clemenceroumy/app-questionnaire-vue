<template>
  <v-app style="background-color: #181b33">
    <v-content>
      <v-slide-y-transition mode="out-in">
        <router-view/>
      </v-slide-y-transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'

}
</script>

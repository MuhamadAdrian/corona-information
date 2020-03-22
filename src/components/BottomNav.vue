<template>
 <v-bottom-navigation
    color="primary"
    class="d-sm-none"
    app
    grow
    shift
  >
    <v-btn to="/">
      <span>Global</span>
      <v-icon>mdi-earth</v-icon>
    </v-btn>

    <v-btn to="/countries">
      <span>Countries</span>
      <v-icon>mdi-flag-outline</v-icon>
    </v-btn>

    <v-btn to="/about">
      <span>About</span>
      <v-icon>mdi-information-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
    data () {
      return {

      }
    },
}
</script>
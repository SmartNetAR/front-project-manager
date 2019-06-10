<template>
  <div class="container">
    <h1>Aquí puede ver los datos de su cuenta</h1>
    <h2>Porque está logueado</h2>
    <div v-if="getProfile.email">
      <p>{{ getProfile.nick }}</p>
      <p>{{ getProfile.email }}</p>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'account',
  date() {
    return{
      profile: {}
    }
  },
  methods: {

  },
  mounted() {
    // console.log( this.getProfile )
  },
  computed: {
    getProfile: {
      get () {
        return this.$store.getters.getProfile
      }
    }
  }
}
</script>
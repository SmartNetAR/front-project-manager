<template>
  <div>
    <h1>My teams</h1>
    <ul>
      <li v-for="team in getTeams" :key="team.id">{{ team.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'teams',
  data(){
      return{
          teams: []
      }
  },
  methods: {
    ...mapActions(['TEAM_REQUEST'])
  },
  computed: {
    getTeams: {
      get () {
        return this.$store.getters.getTeams
      }
    }
  },
  created() {
    this.TEAM_REQUEST()
  }
}
</script>

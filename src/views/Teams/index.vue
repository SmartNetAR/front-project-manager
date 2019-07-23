<template>
  <div class="container">
    <h1>My Teams</h1>
    <team-create-join></team-create-join>
    <team-list :teams="getTeams" class="my-3"></team-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TeamList from '../../components/Team/TeamList';
import TeamCreateJoin from '../../components/Team/TeamCreateJoin';

export default {
  components: {
    TeamList,
    TeamCreateJoin
  },
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
      .then(( resp ) => {
        console.log( resp )
      }).catch( (error) => {
        alert( error.message )
        console.error(error.message)
      })
  }
}
</script>

<template>
  <div class="container">
    <h1>{{$route.params.team.name}}</h1>
    <h2>users:</h2>
    <!-- <button v-if="$route.params.team.pivot.team_role_id===1" class="btn btn-primary">mgr</button> -->
    <user-list :users="users"></user-list>
  </div>
</template>

<script>
import UserList from '../../components/User/UserList'
import { mapActions } from 'vuex';

export default {
  components: {
    UserList
  },
  name: 'users',
  data(){
      return{
          users: [],
          teamId: 0
      }
  },
  methods: {
    ...mapActions(['TEAM_SEARCH']),
  },
  computed: {
  },
  watch:{
    '$router': 'fetchData'
  },
  created() {
    this.teamId = this.$route.params.team.id
    console.log( this.teamId )
    this.TEAM_SEARCH(this.teamId)
      .then( (resp )  =>{
        this.users = resp.teams[0].users
      }).catch( (error) => {
        alert( error.message )
        console.error(error.message)
      })
  }
}
</script>

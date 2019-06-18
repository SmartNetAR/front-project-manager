<template>
  <div class="container">
    <h1>{{$route.params.team.name}} users</h1>
    <button v-if="$route.params.team.pivot.team_role_id===1" class="btn btn-primary">mgr</button>
    <ul v-if="users" class="list-group">
      <li v-for="user in users" :key="user.id" class="list-group-item d-flex justify-content-between align-items-center">
        {{user.nick}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  components: {
    // UserList
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

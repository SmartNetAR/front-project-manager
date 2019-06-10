<template>
  <div class="container card text-center">
    <div class="card-body">
        <h5 class="card-title">Team Name</h5>
        <input class="form-control" required type="text" v-model="name" placeholder="Enter the name of the team to search or create">
        <button class="btn btn-primary m-2" @click="join">Join</button>
        <button class="btn btn-primary m-2" @click="create">Create</button>
    </div>
  </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  name: "TeamCreateJoin",
  data() {
    return {
      name: ''
    }
  },
  methods:{
    ...mapActions( ['TEAM_JOIN', 'TEAM_CREATE'] ),
    
    join() {
      this.TEAM_JOIN( this.name )
      .then( (resp) => {
        // alert( resp.message )
        console.log( resp )
      })
      .catch( (e) => {
        alert( e.message )
        console.error(e)
      })
    },
    create() {
      this.TEAM_CREATE( this.name )
      .then( (resp) => {
        this.name = ''
        console.log(resp)
      })
      .catch( e => {
        alert( e.message )
        console.error(e)
      })
    }
  }
};
</script>

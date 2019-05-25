<template>
  <div class="card">
    <div class="card-body">
      <label for="teamName">Team Name</label>
      <input id="teamName" type="text" v-model="name">
      <button @click="join">Join</button>
    </div>
  </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  name: "TeamJoin",
  data() {
    return {
      name: ''
    }
  },
  methods:{
    ...mapActions( ['TEAM_JOIN'] ),
    
    join() {
      this.TEAM_JOIN( this.name ).then(
        
      )
      // this.TEAM_JOIN( this.name ).then(
      //   alert('joined')
      // )
    }
  }
};
</script>

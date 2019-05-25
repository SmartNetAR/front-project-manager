<template>
  <div class="card">
    <div class="card-body">
      <label for="teamName">Team Name</label>
      <input id="teamName" type="text" v-model="name">
      <button @click="create">Create</button>
    </div>
  </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  name: "TeamCreate",
  data() {
    return {
      name: ''
    }
  },
  methods:{
    ...mapActions( ['TEAM_CREATE'] ),
    create() {
      this.TEAM_CREATE( this.name ).then(
        this.name = ''
      )
    }
  }
};
</script>

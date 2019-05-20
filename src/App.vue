<template>
  <div class="content">
    <Navbar></Navbar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

import Navbar from './components/Navbar'
// import { USER_REQUEST } from 'actions/user'

export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions([ 'USER_REQUEST' ]),
  },
  created: function () {
    if (this.isAuthenticated) {
      this.USER_REQUEST()
    }
  }
}
</script>


<style>
</style>

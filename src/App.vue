<template>
  <div>
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions([ 'USER_REQUEST' ])
  },
  computed: {
    ...mapGetters({ isAuthenticated: 'isAuthenticated' })
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

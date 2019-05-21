<template>
  <div class="home">
    <!-- <Navbar></Navbar> -->
    <img alt="Vue logo" src="../../assets/logo.png">
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
  },
  methods: {
  ...mapActions([ 'AUTH_LOGOUT' ]),

    Exit: function() {
      this.AUTH_LOGOUT()
    }
  }
}
</script>

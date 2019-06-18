<template>
  <div class="container">
    <img alt="Vue logo" src="../../assets/logo.png">
    <ul class="list-group">
      <router-link class="list-group-item list-group-item-action" :to="{ name: 'team'}">My Teams</router-link>
      <router-link class="list-group-item list-group-item-action" :to="{ name: 'team'}">My Projects</router-link>
      <router-link class="list-group-item list-group-item-action" :to="{ name: 'role'}">My Roles</router-link>
    </ul>

    <!-- :to="{ name: 'account' }" exact class="nav-link" -->
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

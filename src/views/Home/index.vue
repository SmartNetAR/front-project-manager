<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <ul class="list-group">
      <li>
        <router-link :to="{ name: 'team'}" class="list-group-item list-group-item-action">My Teams</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'team'}" class="list-group-item list-group-item-action">My Projects</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'team'}" class="list-group-item list-group-item-action">My Roles</router-link>
      </li>
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

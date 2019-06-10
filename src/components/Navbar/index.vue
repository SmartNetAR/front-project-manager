<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link :to="{ name: 'home'}" exact class="navbar-brand">Project Manajer</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'home'}" exact class="nav-link">
              Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about'}" exact class="nav-link">
              About
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li v-if="isAuthenticated" class="nav-item" @click="logout">
            <router-link :to="{ name: 'home' }" exact class="nav-link">
              Logout
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li v-if="!isAuthenticated && !authLoading" class="nav-item">
            <router-link :to="{ name: 'signIn'}" exact class="nav-link">
              Sign In
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li v-if="!isAuthenticated && !authLoading" class="nav-item">
            <router-link :to="{ name: 'login'}" exact class="nav-link">
              Login
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li v-if="isProfileLoaded" class="nav-item">
            <router-link :to="{ name: 'account' }" exact class="nav-link">{{ getProfile.nick }}</router-link>
            <span class="sr-only">(current)</span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  name: 'Navbar',
  methods: {
    ...mapActions( ['AUTH_LOGOUT' ] ),
    logout: function () {
      this.AUTH_LOGOUT()
    }
  },
  computed: {
    ...mapGetters(['getProfile', 'isAuthenticated', 'isProfileLoaded']),
    ...mapState({
      authLoading: state => state.auth.status === 'loading',
      // nick: state => '${state.user.profile.nick}',
    })
  },

}
</script>

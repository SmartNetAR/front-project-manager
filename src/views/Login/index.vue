<template>
  <div class="container">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <div class="form-group">
        <label>User email</label>
        <input class="form-control" required v-model="email" type="text" placeholder="yourvalid@email.com"/>
        <label>Password</label>
        <input class="form-control" required v-model="password" type="password" placeholder="Password"/>        
      </div>
      <button class="btn btn-primary" type="submit">Login</button>
      Are you new to Project Manager <router-link :to="{ name: 'signIn'}">Create Account</router-link>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  // import {AUTH_REQUEST} from 'actions/auth'

  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      ...mapActions([ 'AUTH_REQUEST' ]),

      login: function () {
        const { email, password } = this
        this.AUTH_REQUEST( { email, password })
        .then(() => {
          this.$router.push('/')
        }).catch( (error) => {
          console.error(error)
          alert( error.message )
        })
      }
    },
  }
</script>
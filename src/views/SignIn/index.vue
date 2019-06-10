<template>
  <div class="container">
    <form class="form" @submit.prevent="signin">
      <h1>Sign in</h1>
      <div class="form-group">
        <label>User Nick</label>
        <input class="form-control" required v-model="nick" type="text" placeholder="My Nick"/>
        <label>User email</label>
        <input class="form-control" required v-model="email" type="email" placeholder="yourvalid@email.com"/>
        <label>Password</label>
        <input class="form-control" required v-model="password" type="password" placeholder="Password"/>        
        <label>Confirm Password</label>
        <input class="form-control" required v-model="confirm_password" type="password" placeholder="Repeat Password"/>        
      </div>
      <button class="btn btn-primary" type="submit">Sign In</button>
      Do you already have an account in Project Manager? <router-link :to="{ name: 'login'}">Login</router-link>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  // import {AUTH_REQUEST} from 'actions/auth'

  export default {
    name: 'signIn',
    data () {
      return {
        nick: '',
        email: '',
        password: '',
        confirm_password: '',
      }
    },
    methods: {
      ...mapActions([ 'ACCOUNT_CREATE' ]),

      signin: function () {
        const { nick, email, password, confirm_password } = this
        this.ACCOUNT_CREATE( { nick, email, password, confirm_password })
        .then(() => {
          this.$router.push('/')
        }).catch( (error) => {
          console.error(error.message)
          alert( error.message )
        })
      }
    },
  }
</script>
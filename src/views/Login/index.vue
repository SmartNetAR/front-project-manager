<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label>User name</label>
      <input required v-model="username" type="text" placeholder="Snoopy"/>
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password"/>
      <hr/>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style>
  .login {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
  }
</style>

<script>
  import { mapActions } from 'vuex'
  // import {AUTH_REQUEST} from 'actions/auth'

  export default {
    name: 'login',
    data () {
      return {
        username: 'leonardo@smartnet.com.ar',
        password: 'password',
      }
    },
    methods: {
      ...mapActions([ 'AUTH_REQUEST' ]),

      login: function () {
        const { username, password } = this
        this.AUTH_REQUEST( { username, password }).then(() => {
          this.$router.push('/')
        })
      }
    },
  }
</script>
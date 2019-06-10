<template>
  <div>
    <ul v-if="getTeams.length > 0" class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center" v-for="team in getTeams" :key="team.id">
        {{ team.name }}
        <template v-if="team.pivot.team_role_id === 1">
          <!-- <span class="badge badge-primary badge-pill"> -->
              <!-- <button class="btn btn-success">mgr</button> -->
              <!-- admin
          </span> -->

          <!-- <button class="btn btn-primary btn-small" type="button" data-toggle="collapse" :data-target="'#collapse'+team.id" aria-expanded="false" :aria-controls="'collapse'+team.id">
            Admin
          </button> -->

          <div class="collapse" :id="'collapse'+team.id">
            <div class="card card-body col">
              <router-link class="badge badge-success" :to="{ name: 'role', params: { team: team } }" >
                Roles
              </router-link>
              <router-link class="badge badge-secondary" :to="{ name: 'role', params: { team: team } }" >
                Users
              </router-link>
              <router-link class="badge badge-info" :to="{ name: 'role', params: { team: team } }" >
                Projects
              </router-link>
            </div>
          </div>

          <a href="#" class="badge badge-primary" data-toggle="collapse" :data-target="'#collapse'+team.id" aria-expanded="false" :aria-controls="'collapse'+team.id">admin</a>

        </template>
      </li>
    </ul>
    <template v-else="">
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">You haven't any team</h5>
          <p>You can create or join an existing team</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'teams',
  data(){
      return{
          teams: []
      }
  },
  methods: {
    ...mapActions(['TEAM_REQUEST'])
  },
  computed: {
    getTeams: {
      get () {
        return this.$store.getters.getTeams
      }
    }
  },
  created() {
    this.TEAM_REQUEST()
  }
}
</script>

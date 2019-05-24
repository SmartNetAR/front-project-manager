import { TEAM_REQUEST, TEAM_ERROR, TEAM_SUCCESS } from '../actions/team'
import apiCall from '@/utils/api'
// import Vue from 'vue'

const state = { teams: [], status: '' }

const getters = { 
  getTeams: function(state) { return state.teams }
}

const actions = {
  [TEAM_REQUEST]: ( {commit} ) => {
    commit(TEAM_REQUEST)
    apiCall({url: 'team'})
    .then( resp => {
      commit( TEAM_SUCCESS, resp.teams )
    })
    .catch( resp => {
      console.log(resp)
      commit ( TEAM_ERROR )
    })
  }
}

const mutations = {
  [TEAM_REQUEST]: function( state ) {
    state.status = 'loading'
  },
  [TEAM_ERROR]: function( state ) {
    state.status = 'error'
  },
  [TEAM_SUCCESS]: function( state, resp ) {
    state.status = 'success'
    state.teams = resp
    // Vue.set(state, 'profile', resp)
  }
}



export default {
  state,
  getters,
  actions,
  mutations
}
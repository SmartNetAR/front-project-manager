import { TEAM_REQUEST, TEAM_ERROR, TEAM_SUCCESS } from '../actions/team'
import apiCall from '@/utils/api'
// import Vue from 'vue'

const state = { teams: [], status: '' }

const getters = {
  getTeams: state =>  state.teams 
}

const actions = {
  [TEAM_REQUEST]: async ( {commit} ) => {
    commit(TEAM_REQUEST)
    try {
      const response = await apiCall({url: 'team'})
      commit( TEAM_SUCCESS, response.teams )      
    } catch (error) {
      commit ( TEAM_ERROR )
    }
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
import { TEAM_REQUEST, TEAM_ERROR, TEAM_SUCCESS, TEAM_JOIN, TEAM_CREATE, TEAM_CLEAR, TEAM_SEARCH } from '../actions/team'
import apiCall from '@/utils/api'
import Vue from 'vue'

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
  },
  [TEAM_CREATE]: async ( {dispatch}, name ) => {
    try {
      const response = await apiCall({url: 'team', method: 'POST', data: {'name': name}})
      console.log( response )
      dispatch(TEAM_REQUEST)
    } catch (error) {
      console.log( error )
    }
  },
  [TEAM_SEARCH]: async ( {commit}, name ) => {
    try {
      const response = await apiCall({url: 'team/' + name , method: 'GET'})
      // console.log( response )
      commit(TEAM_SUCCESS, response.teams)
    } catch (error) {
      console.error( error )
    }
  },
  [TEAM_JOIN]: async ( {dispatch, state}, payload ) => {
    try {
      await dispatch(TEAM_SEARCH, payload)
      const teamsFinded = [...state.teams]
      if (teamsFinded.length === 1 ) {
        const response = await apiCall({url: 'team/join/' + teamsFinded[0].id , method: 'GET'})
        dispatch(TEAM_REQUEST)
        return response
      }else {
        console.error( 'no existe el team')
      }
    } catch (error) {
      console.error( error )
    }
  }
}

const mutations = {
  [TEAM_REQUEST]: ( state ) => {
    state.status = 'loading'
  },
  [TEAM_ERROR]: function( state ) {
    state.status = 'error'
  },
  [TEAM_SUCCESS]: ( state, resp ) => {
    state.status = 'success'
    // state.teams = resp
    Vue.set(state, 'teams', resp)
  },
  [TEAM_CLEAR]: ( state ) => {
    state.teams = {}
  }
}



export default {
  state,
  getters,
  actions,
  mutations
}
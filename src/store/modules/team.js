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
      // console.log( response )
      dispatch(TEAM_REQUEST)
      return response
    } catch (error) {
      throw Error(error.message) ;
    }
  },
  [TEAM_SEARCH]: async ( {commit}, name ) => {
    try {
      const response = await apiCall({url: 'team/' + name , method: 'GET'})
      // console.log( response )
      commit(TEAM_SUCCESS, response.teams)
      return response
    } catch (error) {
      throw Error(error.message);
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
        throw Error( {Error: {'message': ['no existe el team'] } })
      }
    } catch (error) {
      dispatch(TEAM_REQUEST)
      throw Error(error.message);
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
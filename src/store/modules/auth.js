/* eslint-disable promise/param-names */
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth'
import { USER_REQUEST } from '../actions/user'
import { TEAM_CLEAR } from '../actions/team'
import apiCall from '@/utils/api'

const state = { token: localStorage.getItem('user-token') || '', status: '', hasLoadedOnce: false }

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
}

const actions = {
  [AUTH_REQUEST]: async ({commit, dispatch}, user) => {
      commit(AUTH_REQUEST)
      try {
        const response = await apiCall({ url: 'login', method: 'POST', data: user })
        localStorage.setItem('user-token', response.token)
        commit(AUTH_SUCCESS, response)
        dispatch(USER_REQUEST)
      } catch (error) {
        commit(AUTH_ERROR, error)
        localStorage.removeItem('user-token')
        throw Error(error.message);
      }
  },
  [AUTH_LOGOUT]: ({commit}) => {
      commit(AUTH_LOGOUT)
      commit(TEAM_CLEAR)
      localStorage.removeItem('user-token')
  }
}

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.token = resp.token
    state.hasLoadedOnce = true
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error'
    state.hasLoadedOnce = true
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
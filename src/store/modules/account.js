/* eslint-disable promise/param-names */
import { ACCOUNT_CREATE } from '../actions/account'
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth'
import { USER_REQUEST } from '../actions/user'
import { TEAM_CLEAR } from '../actions/team'
import apiCall from '@/utils/api'

const actions = {
  [ACCOUNT_CREATE]: async ({commit, dispatch}, user) => {
      commit(ACCOUNT_CREATE)
      try {
        const response = await apiCall({ url: 'register', method: 'POST', data: user })
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
  [ACCOUNT_CREATE]: () => {
    // state.status = 'loading'
  },
}

export default {
  actions,
  mutations,
}
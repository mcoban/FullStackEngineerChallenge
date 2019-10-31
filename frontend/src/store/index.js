import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    isAdmin: state => state.user.isAdmin || false
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, {token, user}) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
      state.user = {}
    }
  },
  actions: {
    login ({commit}, body) {
      return new Promise ((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'http://localhost:3000/signin',
          data: body,
          method: 'POST'
        }).then(res => {
          const token = res.data.token
          const user = res.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', {token, user})
          resolve(res)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({commit}) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})

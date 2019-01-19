/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Set headers for http requests
const api_key = '43c51a9c-4e50-471a-be52-22c836eaa867';
axios.defaults.headers.common['Authorization'] = api_key;

Vue.use(Vuex);
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
  state: {
    balance: null,
    instances: [],
    score: {
      id: null,
      address: null,
      blockchain: null,
      reason: null,
      severity: null,
      metadata: null
    },
  },
  getters : {},
  mutations: {
    SET_INSTANCES (state, res) {
      console.log('get fraud instances successful:')
      console.log(res)
      state.instances = res
    },
    SET_SCORE (state, res) {
      console.log('Score mutation successful:')
      console.log(res)
      state.score.id = res._id
      state.score.address = res.address
      state.score.blockchain = res.blockchain
      state.score.reason = res.reason
      state.score.severity = res.severity
      state.score.metadata = res.metadata
    }
  },
  actions: {
    async getScore ({ commit }, payload) {
      console.dir(payload)
      const baseScoreRequest = 'http://localhost:3000/trust-scores/'
      const requestedChain = payload.blockchain + '/'
      const requestedAddress = payload.address
      const fullScoreRequest = baseScoreRequest + requestedChain + requestedAddress
      const response = await axios.get(fullScoreRequest)
      commit('SET_SCORE', response.data)
      return response.data
    },
    async loadInstances ({ commit }) {
      const response = await axios.get('http://localhost:3000/fraud-instances')
      commit('SET_INSTANCES', response.data)
      return response.data
    }
  },
})

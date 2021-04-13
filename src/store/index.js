import Vue from 'vue'
import Vuex from 'vuex'
import jantriRecords from './utils/jantriRecords'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jantriRecords: jantriRecords,
    points: 0
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

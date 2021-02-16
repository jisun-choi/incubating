import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    personalData: {},
    selected: ''
  },
  //state 변경해 줄 methods
  mutations: {
    updatePersonalInfo(state, data) {
      state.personalData = data
    }
  },
});

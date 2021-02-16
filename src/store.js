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
<<<<<<< HEAD
    updatePersonalInfo(state, data) {
      state.personalData = data
    }
  },
});
=======
    updatePersonalInfo (state, data) {
      state.personalData = data
    },
    updateSelected(state, data) {
      state.selected = data
    }
  }
});
>>>>>>> 8447ff9c0ca0fdc0ca26a28f3e4af444203bd531

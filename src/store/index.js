import { createStore } from 'vuex'

export default createStore({
  state: {
    data_a: "",
    data_b: "",
  },
  mutations: {
    /**
    * 
    * @param {*} commit
    */
    SET_DATA_A: (state, data) => {
      state.data_a = data;
    },
    /**
    * 
    * @param {*} commit
    */
    SET_DATA_B: (state, data) => {
      state.data_b = data;
    },
  },
  actions: {
    SET_DATA_A({ commit }, data) {
      commit('SET_DATA_A', data);
      //SET_PROJECT_CLUSTER({ commit }, data) {commit('SET_PROJECT_CLUSTER', data);},
    },
    SET_DATA_B({ commit }, data) {
      commit('SET_DATA_B', data);
      //SET_PROJECT_CLUSTER({ commit }, data) {commit('SET_PROJECT_CLUSTER', data);},
    }
  },
  getters: {
    DATA_A(state) {
      return state.data_a;
    },
    DATA_B(state) {
      return state.data_b;
    }
  },
  modules: {
  }
})



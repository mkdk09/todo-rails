import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    state: {
      currentUser: null,
      loading: false,
      notification: {
        status: false,
        message: "",
      },
    },
    mutations: {
      setUser(state, payload) {
        state.currentUser = payload
      },
      setLoading(state, payload) {
        state.loading = payload
      },
      setNotice(state, payload) {
        state.notification = payload
      }
    },
    actions: {

    }
  })
}

export default store
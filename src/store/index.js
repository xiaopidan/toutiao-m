import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex)
const TOKEN_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
  state: {
    user: getItem(TOKEN_KEY)
  },
  getters: {
  },
  mutations: {
    setUser (state, data) {
      state.user = data

      // 刷新会消失， 持久化
      setItem(TOKEN_KEY, state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})

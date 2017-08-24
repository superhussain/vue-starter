import Vue from 'vue'
import Vuex from 'vuex'

import count from './count/index'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  modules: {
    count
  },
  strict: DEBUG
})

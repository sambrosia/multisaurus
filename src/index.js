import 'normalize.css'
import './styles/main.scss'
import Vue from 'vue'
import Vuex from 'vuex'
import storeConfig from './store'
import App from './App'

Vue.use(Vuex)
const store = new Vuex.Store(storeConfig)

/* eslint no-new: off */
new Vue({
  store,
  el: '#app',
  render: h => h(App)
})

import 'normalize.css'
import './styles/main.scss'
import Vue from 'vue'
import store from './store'
import App from './App'

/* eslint no-new: off */
new Vue({
  store,
  el: '#app',
  render: h => h(App)
})

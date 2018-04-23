import Vue from 'vue'
import App from './App'

import progressive from './progressive/index.js'
import './progressive/progressive.css'

Vue.use(progressive);

new Vue({
	el: '#app',
	components: { App },
	template: '<App/>'
})

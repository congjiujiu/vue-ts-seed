declare var require: any

import Vue = require('vue');
const App = require('./App.vue').default;

new Vue({
  el: '#app',
  components: {
    App,
  },
  render: h => h('app')
})

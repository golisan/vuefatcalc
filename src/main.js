import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({ el: '#components-demo' })

component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
new Vue({
  render: h => h(App),
  data: {
    punkte:0
  }
}).$mount('#app')



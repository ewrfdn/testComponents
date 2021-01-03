import Vue from 'vue'
import App from './App.vue'
import router from './router'
import tui from '../components'
Vue.config.productionTip = false
Vue.use(tui)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

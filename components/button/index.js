import tButton from './testButton.vue'
tButton.install = function (Vue) {
    Vue.component(tButton.name, tButton)
}
export default tButton

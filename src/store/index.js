import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    showFooter: true,
    changableNum: 11
}
const getters ={
    setShow(state){
        return state.showFooter
    }
}
const store = new Vuex.Store({
    state,getters
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list'
import cart from './modules/cart'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        list, cart
    }
})
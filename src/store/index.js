import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// state application
const state = {
    count: 0
};

// actions application
const actions = {
    increment (context){
        context.commit('increment');
    },
    decrement (context){
        context.commit('decrement');
    }
};

// mutations application
const mutations = {
    increment: state => state.count ++,
    decrement: state => state.count --,
};

export default new Vuex.Store({
    state,
    actions,
    mutations
})
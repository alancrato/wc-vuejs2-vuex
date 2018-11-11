import Vue from 'vue'
import Vuex from 'vuex'

import bills from '@/api/bills'

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        bills: []
    },

    getters: {},

    actions: {
        fetchBills ({commit}){
            bills.getBills(bills => {
                commit('setBills', bills)
            })
        }
    },

    mutations: {
        setBills (state, bills){
            state.bills = bills
        }
    }

})
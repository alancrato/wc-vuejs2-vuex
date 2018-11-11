
// state application
const state = {
    items: 10
};

// actions application
const actions = {
    cartIncrement ({commit}){
        commit('cartIncrement');
    },
    cartDecrement ({commit}){
        commit('cartDecrement');
    }
};

// mutations application
const mutations = {
    cartIncrement: state => state.items ++,
    cartDecrement: state => state.items --,
};

export default{
    state,
    actions,
    mutations
}


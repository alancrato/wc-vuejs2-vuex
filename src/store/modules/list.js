
// state module
const state = {
    count: 9
};

// actions application
const actions = {
    increment ({commit}){
        commit('increment');
    },
    decrement ({commit}){
        commit('decrement');
    }
};

// mutations application
const mutations = {
    increment: state => state.count ++,
    decrement: state => state.count --,
};

export default{
    state,
    actions,
    mutations
}


// state application
const state = {
    count: 9
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

export default{
    state,
    actions,
    mutations
}

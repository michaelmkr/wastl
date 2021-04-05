import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        testVar: "this is the store variable"
    },

    getters: {
        getTestVar: state => {
            return state.testVar;
        }
    },

    mutations: {
        changeTestVar(state, payload) {
            state.testVar = payload;
        },
    },

    actions: {
        setTestVar({commit}, payload) {
            commit('changeTestVar', payload)
        },
    },

    strict: process.env.NODE_ENV !== 'production',
});

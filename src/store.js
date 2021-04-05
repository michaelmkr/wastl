import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const bc = new BroadcastChannel('wastl_broadcast');

const myPlugin = store => {
    bc.onmessage = function (ev) {
        console.log(ev);
        store.commit('changeTestVar', ev.data)
    }
}

export default new Vuex.Store({
    plugins:[myPlugin],
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
            bc.postMessage(payload)
            commit('changeTestVar', payload)
        },
    },

    strict: process.env.NODE_ENV !== 'production',
});

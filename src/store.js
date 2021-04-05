import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const bc = new BroadcastChannel('wastl_broadcast');

const myPlugin = store => {
    bc.onmessage = function (ev) {
        console.log(ev);
        store.commit('changeCurrentStep', ev.data)
    }
}

export default new Vuex.Store({
    state: {
        testVar: "this is the store variable",
        currentStep: 0,
        steps: [
            {
                msg: "Please connect the blue cable to the highlighted input",
                inputs: ["i0", "o4"],
                img: '/img/step1.jpg'
            },
            {
                msg: "this is step 2",
                inputs: ["PWR", "GND"],
                img: '/img/step2.jpg'
            },
            {
                msg: "this is step 3",
                inputs: ["o2", "i5"],
                img: '/img/step3.jpg'
            },
            {
                msg: "this is step 4",
                inputs: ["i6", "o3"],
                img: '/img/step4.jpg'
            }
        ]
    },

    getters: {
        getTestVar: state => {
            return state.testVar;
        },
        getCurrentStep: state => {
            return state.currentStep;
        },
        getSteps: state => {
            return state.steps;
        },
    },

    mutations: {
        changeTestVar(state, payload) {
            state.testVar = payload;
        },
        changeCurrentStep(state, payload) {
            if (payload <= state.steps.length-1 && payload > 0){
                state.currentStep = payload;
                console.log('new current step: ' + state.currentStep)
            } else {
                console.log('exceeded the amount of available steps')
                console.log('staying at step: ' + state.currentStep)
            }

        },
    },

    actions: {
        setTestVar({commit}, payload) {
            commit('changeTestVar', payload)
        },
        setCurrentStep({commit}, payload) {
            bc.postMessage(payload)
            commit('changeCurrentStep', payload)
        },
    },
    plugins:[myPlugin],
    strict: process.env.NODE_ENV !== 'production',
});

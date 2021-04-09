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
                msg: "Verbinden Sie das rote Kabel mit Power des UCB.",
                detail: "",
                inputs: ["PWR"],
                img: '/img/step1.jpg'
            },
            {
                msg: "Verbinden Sie das schwarze Kabel mit der Masse.",
                detail: "",
                inputs: ["GND"],
                img: '/img/step2.jpg'
            },
            {
                msg: "Verbinden Sie das selbe schwarze Kabel auch mit der Masse des Tec2Screen Systems.",
                detail: "",
                inputs: ["tGND"],
                img: '/img/step1.jpg'
            },
            {
                msg: "Verbinden Sie das schwarze Kabel der Ampel mit der Masse.",
                detail: "",
                inputs: ["GND"],
                img: '/img/step3.jpg'
            },
            {
                msg: "Verbinden Sie das rote Kabel der Ampel mit Plus.",
                detail: "Nach dem Verbinden sollte das rote Licht der Ampel leuchten.",
                inputs: ["PWR"],
                img: '/img/step.jpg'
            },
            {
                msg: "Verbinden Sie das gelbe Kabel der Ampel mit Plus.",
                detail: "Nach dem Verbinden sollte das gelbe Licht der Ampel leuchten.",
                inputs: ["PWR"],
                img: '/img/step.jpg'
            },
            {
                msg: "Verbinden Sie das grüne Kabel der Ampel mit Plus.",
                detail: "Nach dem Verbinden sollte das grüne Licht der Ampel leuchten.",
                inputs: ["PWR"],
                img: '/img/step.jpg'
            },
            {
                msg: "Verbinden Sie mit dem gelben Kabel den Input 3 des UCB und den Output des Schalters Tec2Screen System.",
                detail: "",
                inputs: ["i3","t6"],
                img: '/img/step.jpg'
            },
            {
                msg: "Verbinden Sie mit dem grünen Kabel den Input 0 des UCB und den Output des Schiebereglers im Tec2Screen System.",
                detail: "",
                inputs: ["i0","t8"],
                img: '/img/step.jpg'
            },
            {
                msg: "Wenn Sie nun den Schieberegler verschieben, sollte die Kontrollanzeige (D7) des Controllino (Steuereinheit) aufleuchten",
                detail: "",
                inputs: ["clD"],
                img: '/img/step.jpg'
            },
            {
                msg: "Wenn Sie nun den Schalter umlegen, sollte die Kontrollanzeige (A3) des Controllino (Steuereinheit) aufleuchten",
                detail: "",
                inputs: ["clA"],
                img: '/img/step.jpg'
            },
            {
                msg: "Verbinden Sie den nun G+ der Glühbirne mit Output 7.",
                detail: "",
                inputs: ["g+", "o7"],
                img: '/img/step.jpg'
            },
            {
                msg: "Ampel Masse abstecken, Glühbirn Masse verbinden, Ampel Masse wieder darauf stecken",
                detail: "",
                inputs: ["GND","g-"],
                img: '/img/step.jpg'
            },
            {
                msg: "Schieberegler sollte nun Glühbirne dimmen können",
                detail: "",
                inputs: ["xx"],
                img: '/img/step.jpg'
            },
            {
                msg: "Verbinden Sie das rote Licht der Ampel mit Output 2",
                detail: "",
                inputs: ["o2"],
                img: '/img/step.jpg'
            },
            {
                msg: "Verbinden Sie Sie das gelbe Licht der  Ampel mit Output 6",
                detail: "",
                inputs: ["o6"],
                img: '/img/step.jpg'
            },
            {
                msg: "Verbinden Sie Sie das grüne Licht der  Ampel mit Output 0",
                detail: "",
                inputs: ["o0"],
                img: '/img/step.jpg'
            },
            {
                msg: "Verbinden Sie mit einem roten Kabel den Helligkeitssensor der Glühbirne (S+) mit der Power des UCB.",
                detail: "",
                inputs: ["s+", "PWR"],
                img: '/img/step.jpg'
            },
            {
                msg: "Verbinden Sie den Lichtsensor der Glühbirne mit Input 1 (blaues Kabel)",
                detail: "",
                inputs: ["i1"],
                img: '/img/step.jpg'
            },
            {
                msg: "Switch aktivieren -> Ampel reagiert auf Helligkeit",
                detail: "",
                inputs: ["xx"],
                img: '/img/step.jpg'
            },
            {
                msg: "text",
                detail: "",
                inputs: ["xx"],
                img: '/img/step.jpg'
            },
            {
                msg: "text",
                detail: "",
                inputs: ["xx"],
                img: '/img/step.jpg'
            },
            {
                msg: "text",
                detail: "",
                inputs: ["xx"],
                img: '/img/step.jpg'
            },
            {
                msg: "text",
                detail: "",
                inputs: ["xx"],
                img: '/img/step.jpg'
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
            if (payload <= state.steps.length-1 && payload >= 0){
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

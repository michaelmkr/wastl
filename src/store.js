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
                msg: "Einführung",
                detail: "Ich werde Ihnen jetzt alle Komponenten kurz erklären.",
                inputs: [""],
                img: '/img/'
            },
            {
                msg: "Rechts von Ihrem Arbeitsplatz befinden sich alle Kabel die Sie benötigen.",
                detail: "",
                inputs: [""],
                img: '/img/'
            },
            {
                msg: "Die Verbindung der Stromquelle befindet sich links auf dem Steckbrett.",
                detail: "",
                inputs: ["PWR", "GND"],
                img: '/img/'
            },
            {
                msg: "Jetzt habe ich Ihnen die Eingänge des Steckbretts hervorgehoben.",
                detail: "",
                inputs: ["i0", "i1", "i2", "i3", "i4", "i5", "i6", "i7"],
                img: '/img/'
            },
            {
                msg: "Jetzt habe ich Ihnen die Ausgänge des Steckbretts hervorgehoben.",
                detail: "",
                inputs: ["o0", "o1", "o2", "o3", "o4", "o5", "o6", "o7"],
                img: '/img/'
            },
            {
                msg: "Wenn die Ein- und Ausgänge aktiv sind, leuchten auch die jeweiligen Anzeigen auf dem Controllino.",
                detail: "",
                inputs: ["clD", "clA"],
                img: '/img/'
            },
            {
                msg: "Am Tec2Screen System sehen Sie die jeweiligen Ausgänge.",
                detail: "Die Ausgangslinien Schalters und des Schiebereglers zeigen Ihnen welcher Ausgang mit ihnen verbunden ist.",
                inputs: ["t6", "t8"],
                img: '/img/'
            },
            {
                msg: "Die Glühbirne besitzt eine Stromversorgung (G+ und -), sowie einen Helligkeitssensor (S+ und T).",
                detail: "S+ ist hierbei die Stromversorgung des Sensors und T der Ausgang über den Sie den Wert auslesen können.",
                inputs: ["g+", "g-", "s+", "st"],
                img: '/img/'
            },
            {
                msg: "Aufgabe 1: Testen der Komponenten",
                detail: "In den folgenden Schritten werden Sie alle Komponenten durchtesten um sicher zu stellen, dass diese funktionieren.",
                inputs: [""],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie das rote Kabel mit dem 24V Anschluss des Steckbretts.",
                detail: "Die Stromzufuhr für das Steckbrett kommt vom Tec2Screen System.",
                inputs: ["PWR"],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie das schwarze Kabel mit der Masse des Steckbretts.",
                detail: "Die Stromzufuhr für das Steckbrett kommt vom Tec2Screen System.",
                inputs: ["GND"],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie das selbe schwarze Kabel auch mit der Masse des Tec2Screen Systems.",
                detail: "",
                inputs: ["tGND"],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie das schwarze Kabel der Ampel mit der Masse.",
                detail: "",
                inputs: ["GND"],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie das rote Kabel der Ampel mit Plus.",
                detail: "Nach dem Verbinden sollte das rote Licht der Ampel leuchten. Ist dies der Fall, ziehen Sie das Kabel wieder ab.",
                inputs: ["PWR"],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie das gelbe Kabel der Ampel mit Plus.",
                detail: "Nach dem Verbinden sollte das gelbe Licht der Ampel leuchten. Ist dies der Fall, ziehen Sie das Kabel wieder ab.",
                inputs: ["PWR"],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie das grüne Kabel der Ampel mit Plus.",
                detail: "Nach dem Verbinden sollte das grüne Licht der Ampel leuchten." +
                    "Ist dies der Fall, ziehen Sie das Kabel wieder ab.",
                inputs: ["PWR"],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie mit dem gelben Kabel den Input 3 des UCB und den Output des Schalters im Tec2Screen System.",
                detail: "Beachten Sie, dass das Tec2Screen System Ihnen zeigt welcher Ausgang der richtige ist.",
                inputs: ["i3", "t6"],
                img: '/img/'
            },
            {
                msg: "Verstellen Sie nun den Schalter des Tec2Screen Systems.",
                detail: "Wenn Sie nun den Schalter umlegen, sollte die Kontrollanzeige (A3) des Controllino (Steuereinheit) aufleuchten.",
                inputs: ["clA"],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie mit dem grünen Kabel den Eingang 0 des Steckbretts und den Ausgang des Schiebereglers im Tec2Screen System.",
                detail: "Beachten Sie, dass das Tec2Screen System Ihnen zeigt welcher Ausgang der Richtige ist.",
                inputs: ["i0", "t8"],
                img: '/img/'
            },
            {
                msg: "Verstellen Sie nun den Schieberegler des Tec2Screen Systems.",
                detail: "Wenn Sie den Schieberegler verstellen, sollten Sie damit die Kontrollanzeige (D7) des Controllino (Steuereinheit) dimmen können.",
                inputs: ["clD"],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie nun G+ der Glühbirne mit dem 24V Anschluss des Steckbretts.",
                detail: "",
                inputs: ["g+", "PWR"],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie nun - der Glühbirne mit der Masse des Steckbretts.",
                detail: "Die Glühbirne sollte nun leuchten.",
                inputs: ["g-", "GND"],
                img: '/img/'
            },
            {
                msg: "Stecken Sie nun wieder alle Kabel der Glühbirne ab.",
                detail: "Stecken Sie die Kabel sowohl von der Glühbirne als auch vom Steckbrett ab und legen Sie diese zurück." +
                    "Danach geht es weiter mit der nächsten Übung.",
                inputs: ["", ""],
                img: '/img/'
            },
            {
                msg: "Aufgabe 2: Dimmen der Glühbirne.",
                detail: "In dieser Aufgabe lernen wir, wie wir die Glühbirne dimmen können.",
                inputs: ["", ""],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie nun den G+ der Glühbirne mit Output 7.",
                detail: "",
                inputs: ["g+", "o7"],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie den nun die Masse der Glühbirne mit der Masse des Steckbretts.",
                detail: "",
                inputs: ["g-", "GND"],
                img: '/img/'
            },
            {
                msg: "Der Schieberegler sollte nun Glühbirne dimmen können",
                detail: "Verstellen Sie den Schieberegler des Tec2Screen Systems um das zu testen.",
                inputs: ["xx"],
                img: '/img/'
            },
            {
                msg: "Aufgabe 3: Ampelsteuerung",
                detail: "In dieser Aufgabe lernen wir, wie wir die Ampel über die Helligkeit der Glühbirne steuern können.",
                inputs: ["", ""],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie das rote Licht der Ampel mit Ausgang 2",
                detail: "",
                inputs: ["o2"],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie Sie das gelbe Licht der  Ampel mit Ausgang 6",
                detail: "",
                inputs: ["o6"],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie Sie das grüne Licht der  Ampel mit Ausgang 0",
                detail: "",
                inputs: ["o0"],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie mit einem roten Kabel den Helligkeitssensor der Glühbirne mit der Power des Steckbretts.",
                detail: "In diesem Schritt verbinden wir die Stromversorgung des Helligkeitssensors mit der des Steckbretts.",
                inputs: ["s+", "PWR"],
                img: '/img/'
            },
            {
                msg: "Verbinden Sie mit dem blauen Kabel den Lichtsensor der Glühbirne mit Eingang 1.",
                detail: "Das erlaubt uns, den Sensorwert im Controllino auszulesen.",
                inputs: ["i1", "st"],
                img: '/img/'
            },
            {
                msg: "Schalten Sie den Schalter im Tec2Screen System ein und dimmen Sie nun die Glühbirne.",
                detail: "Bei hoher Helligkeit sollte die Ampel rot leuchten. Bei geringer Helligkeit grün.",
                inputs: ["xx"],
                img: '/img/'
            },
            {
                msg: "Ende der Übungen: Gratulation!",
                detail: "Sie haben die Einführungs-Übung absolviert! Bitte wenden Sie sich nun an Ihren Betreuer.",
                inputs: ["", ""],
                img: '/img/'
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
            if (payload <= state.steps.length - 1 && payload >= 0) {
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
    plugins: [myPlugin],
    strict: process.env.NODE_ENV !== 'production',
});

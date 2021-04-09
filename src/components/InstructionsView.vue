<template>
  <div>
    <h1>Anleitung</h1>
    <div id="mainContent">
      <!--      <p>Current step: <br>{{ getCurrentStep }}</p>-->
      <div style="margin: auto; position: absolute; top: 100px;"><h1>{{ getSteps[getCurrentStep].msg }}</h1></div>
      <div style="margin: auto; position: absolute; top: 300px;"><h3>{{ getSteps[getCurrentStep].detail }}</h3></div>
      <div style="position: absolute; top: 400px; max-height: 400px; margin:auto;"><img :src="getSteps[getCurrentStep].img" style="max-height: 500px!important"></div>
      <!--      <p>Current inputs: <br>{{ getSteps[getCurrentStep].inputs }}</p>-->
    </div>
    <button class="mdc-button mdc-button--raised button" style="left: 10px;" @click="lastStep">zurück</button>
    <button class="mdc-button mdc-button--raised button" style="right: 10px;" @click="nextStep">weiter</button>
    <br><br>
    <br><br>
    <router-link to="/projection">
      <button>Go to Projection</button>
    </router-link>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "InstructionsView",
  data() {
    return {}
  },
  beforeCreate: function () {
    document.body.style.backgroundColor = 'white';
  },
  computed: {
    ...mapGetters([
      'getTestVar',
      'getCurrentStep',
      'getSteps'
    ]),
  },
  methods: {
    ...mapActions([
      'setTestVar',
      'setCurrentStep',
    ]),
    nextStep() {
      this.setCurrentStep(this.getCurrentStep + 1);
    },
    lastStep() {
      this.setCurrentStep(this.getCurrentStep - 1);
    }
  }
}
</script>

<style scoped>

#mainContent {
  position: absolute;
  width: 60%;
  left: 25%;
  background-color: lightcoral;
}

.button {
  width: 200px;
  height: 100%;
  position: absolute;
  top: 10px;
  bottom: 10px;
  background-color: #236B8E !important;
}

</style>

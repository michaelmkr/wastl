<template>
  <div>
    <h1>Instructions View</h1>
        <p>Current step: <br>{{getCurrentStep}}</p>
        <p>Current message: <br>{{getSteps[getCurrentStep].msg}}</p>
        <p>Current inputs: <br>{{getSteps[getCurrentStep].inputs}}</p>
    <button @click="lastStep">previous step</button>
    <button @click="nextStep">next step</button>
    <br><br>
    <img :src="getSteps[getCurrentStep].img" style="width:50%;">
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
    return {
    }
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

</style>

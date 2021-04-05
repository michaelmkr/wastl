<template>
  <!--  <div>-->
  <!--    <h1>Projection View</h1>-->
  <!--    <p>Below goes the Store Variable: <br>{{getTestVar}}</p>-->
  <!--  </div>-->


  <div style="position: absolute; left: 0px; top: 0px;">

    <div id="UCBoard" style="">

      <div
          style="position: absolute; top: 0px; left: 0px; width: 50px; height: 50px; border-left: 10px solid white; border-top: 10px solid white; box-sizing: border-box;"></div>
      <div
          style="position: absolute; top: 0px; left: 370px; width: 50px; height: 50px; border-right: 10px solid white; border-top: 10px solid white; box-sizing: border-box;"></div>
      <div
          style="position: absolute; top: 430px; left: 0px; width: 50px; height: 50px; border-left: 10px solid white; border-bottom: 10px solid white; box-sizing: border-box;"></div>
      <div
          style="position: absolute; top: 430px; left: 370px; width: 50px; height: 50px; border-right: 10px solid white; border-bottom: 10px solid white; box-sizing: border-box;"></div>

      <div id="powerSupply" style="">
        <div id="PWR" class="input" v-bind:class="[getSteps[getCurrentStep].inputs.includes('PWR') ? 'active' : '']"/>
        <div id="GND" class="input" v-bind:class="[getSteps[getCurrentStep].inputs.includes('GND') ? 'active' : '']"/>
      </div>

      <div id="inputsContainer" style="">

        <div id="i0" class="input row1 col1" v-bind:class="[getSteps[getCurrentStep].inputs.includes('i0') ? 'active' : '']"/>
        <div id="i4" class="input row1 col2" v-bind:class="[getSteps[getCurrentStep].inputs.includes('i4') ? 'active' : '']"/>
        <div id="o0" class="input row1 col3" v-bind:class="[getSteps[getCurrentStep].inputs.includes('o0') ? 'active' : '']"/>
        <div id="o4" class="input row1 col4" v-bind:class="[getSteps[getCurrentStep].inputs.includes('o4') ? 'active' : '']"/>
        <div id="" class="input row1 col5" v-bind:class="[getSteps[getCurrentStep].inputs.includes('') ? 'active' : '']"/>
        <div id="" class="input row1 col6" v-bind:class="[getSteps[getCurrentStep].inputs.includes('') ? 'active' : '']"/>

        <div id="i1" class="input row2 col1" v-bind:class="[getSteps[getCurrentStep].inputs.includes('i1') ? 'active' : '']"/>
        <div id="i5" class="input row2 col2" v-bind:class="[getSteps[getCurrentStep].inputs.includes('i5') ? 'active' : '']"/>
        <div id="o1" class="input row2 col3" v-bind:class="[getSteps[getCurrentStep].inputs.includes('o1') ? 'active' : '']"/>
        <div id="o5" class="input row2 col4" v-bind:class="[getSteps[getCurrentStep].inputs.includes('o5') ? 'active' : '']"/>
        <div id="" class="input row2 col5" v-bind:class="[getSteps[getCurrentStep].inputs.includes('') ? 'active' : '']"/>
        <div id="" class="input row2 col6" v-bind:class="[getSteps[getCurrentStep].inputs.includes('') ? 'active' : '']"/>

        <div id="i2" class="input row3 col1" v-bind:class="[getSteps[getCurrentStep].inputs.includes('i2') ? 'active' : '']"/>
        <div id="i6" class="input row3 col2" v-bind:class="[getSteps[getCurrentStep].inputs.includes('i6') ? 'active' : '']"/>
        <div id="o2" class="input row3 col3" v-bind:class="[getSteps[getCurrentStep].inputs.includes('o2') ? 'active' : '']"/>
        <div id="o6" class="input row3 col4" v-bind:class="[getSteps[getCurrentStep].inputs.includes('o6') ? 'active' : '']"/>
        <div id="" class="input row3 col5" v-bind:class="[getSteps[getCurrentStep].inputs.includes('') ? 'active' : '']"/>
        <div id="" class="input row3 col6" v-bind:class="[getSteps[getCurrentStep].inputs.includes('') ? 'active' : '']"/>

        <div id="i3" class="input row4 col1" v-bind:class="[getSteps[getCurrentStep].inputs.includes('i3') ? 'active' : '']"/>
        <div id="i7" class="input row4 col2" v-bind:class="[getSteps[getCurrentStep].inputs.includes('i7') ? 'active' : '']"/>
        <div id="o3" class="input row4 col3" v-bind:class="[getSteps[getCurrentStep].inputs.includes('o3') ? 'active' : '']"/>
        <div id="o7" class="input row4 col4" v-bind:class="[getSteps[getCurrentStep].inputs.includes('o7') ? 'active' : '']"/>
        <div id="" class="input row4 col5" v-bind:class="[getSteps[getCurrentStep].inputs.includes('') ? 'active' : '']"/>
        <div id="" class="input row4 col6" v-bind:class="[getSteps[getCurrentStep].inputs.includes('') ? 'active' : '']"/>

      </div>

      <div id="onBoardText" style="">
<!--        <p>Please connect the blue cable to the highlighted input</p>-->
      </div>

    </div>

    <div id="worktopText" style="">
      <br><br><br><br><br><br>
      <h1>{{ getSteps[getCurrentStep].msg }}</h1>
      <p>current step: {{ getCurrentStep }}</p>
    </div>

  </div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "ProjectionView",
  data() {
    return {
      test: 1,
    }
  },
  beforeCreate: function () {
    document.body.style.backgroundColor = 'black';
    document.body.style.height = '800px';
    document.body.style.width = '1200px';
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
    myOwnAction() {
      this.setTestVar('changed now');
      console.log("test log to console");
    }
  }
}
</script>

<style scoped>

#UCBoard {
  height: 480px;
  width: 420px;
  background-color: blue;
  position: absolute;
  left: 400px;
  top: 200px;
}

#inputsContainer {
  height: 160px;
  width: 180px;
  background-color: green;
  position: absolute;
  left: 89px;
  top: 253px;
}

#powerSupply {
  height: 160px;
  width: 180px;
  background-color: yellow;
  position: absolute;
  left: 29px;
  top: 253px;
}

#onBoardText {
  height: 160px;
  width: 116px;
  background-color: black;
  color: white;
  position: absolute;
  left: 271px;
  top: 253px;
}

#worktopText {
  height: 480px;
  width: 420px;
  background-color: red;
  color: white;
  position: absolute;
  left: 850px;
  top: 200px;
}

#PWR {
  top: 5px;
  left: 15px;
  background-color: lightcoral;
}

#GND {
  top: 50px;
  left: 15px;
  background-color: lightskyblue;
}

.input {
  height: 40px;
  width: 30px;
  background-color: grey;
  position: absolute;
  border: 1px solid white;
  box-sizing: border-box;
}


.row1 {
  top: 0px;
}

.row2 {
  top: 40px;
}

.row3 {
  top: 80px;
}

.row4 {
  top: 120px;
}

.col1 {
  left: 0px;
}

.col2 {
  left: 30px;
}

.col3 {
  left: 60px;
}

.col4 {
  left: 90px;
}

.col5 {
  left: 120px;
}

.col6 {
  left: 150px;
}

.active {
  background-color: white!important;
}

</style>

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

      <div id="controllinoLights" style="">
        <div id="clA" class="input" v-bind:class="[getSteps[getCurrentStep].inputs.includes('clA') ? 'active' : '']"/>
        <div id="clD" class="input" v-bind:class="[getSteps[getCurrentStep].inputs.includes('clD') ? 'active' : '']"/>
      </div>

      <div id="inputsContainer">

        <div id="i0" class="input row1 col1"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('i0') ? 'active' : '']"/>
        <div id="i4" class="input row1 col2"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('i4') ? 'active' : '']"/>
        <div id="o0" class="input row1 col3"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('o0') ? 'active' : '']"/>
        <div id="o4" class="input row1 col4"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('o4') ? 'active' : '']"/>
        <div id="d0" class="input row1 col5"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('d0') ? 'active' : '']"/>
        <div id="d4" class="input row1 col6"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('d4') ? 'active' : '']"/>

        <div id="i1" class="input row2 col1"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('i1') ? 'active' : '']"/>
        <div id="i5" class="input row2 col2"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('i5') ? 'active' : '']"/>
        <div id="o1" class="input row2 col3"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('o1') ? 'active' : '']"/>
        <div id="o5" class="input row2 col4"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('o5') ? 'active' : '']"/>
        <div id="d1" class="input row2 col5"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('d1') ? 'active' : '']"/>
        <div id="d5" class="input row2 col6"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('d5') ? 'active' : '']"/>

        <div id="i2" class="input row3 col1"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('i2') ? 'active' : '']"/>
        <div id="i6" class="input row3 col2"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('i6') ? 'active' : '']"/>
        <div id="o2" class="input row3 col3"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('o2') ? 'active' : '']"/>
        <div id="o6" class="input row3 col4"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('o6') ? 'active' : '']"/>
        <div id="d2" class="input row3 col5"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('d2') ? 'active' : '']"/>
        <div id="d6" class="input row3 col6"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('d6') ? 'active' : '']"/>

        <div id="i3" class="input row4 col1"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('i3') ? 'active' : '']"/>
        <div id="i7" class="input row4 col2"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('i7') ? 'active' : '']"/>
        <div id="o3" class="input row4 col3"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('o3') ? 'active' : '']"/>
        <div id="o7" class="input row4 col4"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('o7') ? 'active' : '']"/>
        <div id="d3" class="input row4 col5"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('d3') ? 'active' : '']"/>
        <div id="d7" class="input row4 col6"
             v-bind:class="[getSteps[getCurrentStep].inputs.includes('d7') ? 'active' : '']"/>

      </div>

      <div id="onBoardText">
        <!--        <p>Please connect the blue cable to the highlighted input</p>-->
      </div>

    </div>

    <div
        class="powerCables"
        v-bind:class="[getSteps[getCurrentStep].inputs.includes('src') ? 'active' : '']"></div>

    <div id="worktopText">
      <br><br><br><br><br><br>
      <h1>{{ getSteps[getCurrentStep].msg }}</h1>
      <br><br>
      <h3>{{ getSteps[getCurrentStep].detail }}</h3>
    </div>

    <div id="tec2screen">
      <div
          class="tec2screenBlock"
          style="top: 0px; left: 0px; width: 70px; height: 66px;"
          v-bind:class="[getSteps[getCurrentStep].inputs.includes('t1') ? 'active' : '']"></div>
      <div
          class="tec2screenBlock"
          style="top: 0px; right: 12px; width: 70px; height: 66px;"
          v-bind:class="[getSteps[getCurrentStep].inputs.includes('t2') ? 'active' : '']"></div>
      <div
          class="tec2screenBlock"
          style="top: 70px; left: 0px; width: 70px; height: 66px;"
          v-bind:class="[getSteps[getCurrentStep].inputs.includes('t3') ? 'active' : '']"></div>
      <div
          class="tec2screenBlock"
          style="top:70px; right: 8px; width: 74px; height: 66px;"
          v-bind:class="[getSteps[getCurrentStep].inputs.includes('t4') ? 'active' : '']"></div>
      <div
          class="tec2screenBlock"
          style="top: 140px; left: 0px; width: 70px; height: 66px;"
          v-bind:class="[getSteps[getCurrentStep].inputs.includes('t5') ? 'active' : '']"></div>
      <div
          class="tec2screenBlock"
          style="top:145px; right: 4px; width: 78px; height: 66px;"
          v-bind:class="[getSteps[getCurrentStep].inputs.includes('t6') ? 'active' : '']"></div>
      <div
          class="tec2screenBlock"
          style="top: 210px; left: 0px; width: 70px; height: 66px;"
          v-bind:class="[getSteps[getCurrentStep].inputs.includes('t7') ? 'active' : '']"></div>
      <div
          class="tec2screenBlock"
          style="top:220px; right: 0px; width: 82px; height: 66px;"
          v-bind:class="[getSteps[getCurrentStep].inputs.includes('t8') ? 'active' : '']"></div>
      <div
          class="tec2screenBlock"
          style="top:332px; right: 0px; width: 82px; height: 50px;"
          v-bind:class="[getSteps[getCurrentStep].inputs.includes('tGND') ? 'active' : '']"></div>
    </div>

    <div id="lightbulb">
      <div
          style="position: absolute; top:23px; left: 0px; width: 30px; height: 20px; border: 1px solid white;"
          v-bind:class="[getSteps[getCurrentStep].inputs.includes('g-') ? 'active' : '']"></div>
      <div
          style="position: absolute; top:60px; left: 0px; width: 30px; height: 20px; border: 1px solid white;"
          v-bind:class="[getSteps[getCurrentStep].inputs.includes('g+') ? 'active' : '']"></div>
      <div
          style="position: absolute; top:97px; left: 0px; width: 30px; height: 20px; border: 1px solid white;"
          v-bind:class="[getSteps[getCurrentStep].inputs.includes('s+') ? 'active' : '']"></div>

      <div
          style="position: absolute; top:22px; right: 0px; width: 33px; height: 20px; border: 1px solid white;"
          v-bind:class="[getSteps[getCurrentStep].inputs.includes('st') ? 'active' : '']"></div>
      <div
          style="position: absolute; top:60px; right: 0px; width: 30px; height: 20px; border: 1px solid white;"
          v-bind:class="[getSteps[getCurrentStep].inputs.includes('null') ? 'active' : '']"></div>
      <div
          style="position: absolute; top:98px; right: 0px; width: 30px; height: 20px; border: 1px solid white;"
          v-bind:class="[getSteps[getCurrentStep].inputs.includes('null') ? 'active' : '']"></div>
    </div>

    <div id="lightbulbBorder">
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
    document.body.style.overflow = 'hidden';
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
//background-color: blue; position: absolute; left: 350px; top: 200px;
}

#inputsContainer {
  height: 160px;
  width: 180px;
//background-color: green; position: absolute; left: 89px; top: 253px;
}

#powerSupply {
  height: 160px;
  width: 180px;
//background-color: yellow; position: absolute; left: 29px; top: 253px;
}

#controllinoLights {
  height: 36px;
  width: 80px;
//background-color: yellow; position: absolute; left: 30px; top: 130px;
}

#onBoardText {
  height: 160px;
  width: 116px;
//background-color: black; color: white; position: absolute; left: 271px; top: 253px;
}

#worktopText {
  height: 480px;
  width: 320px;
//background-color: red; color: white; position: absolute; left: 0px; top: 200px;
}

#tec2screen {
  height: 480px;
  width: 380px;
//background-color: red; color: white; position: absolute; left: 850px; top: 0px;
}

#lightbulb {
  height: 120px;
  width: 115px;
  color: white;
  position: absolute;
  left: 1010px;
  top: 580px;
}

#lightbulbBorder {
  height: 120px;
  width: 100px;
  color: white;
  position: absolute;
  left: 990px;
  top: 558px;
  border: 20px solid black;
}

#PWR {
  top: 5px;
  left: 15px;
//background-color: lightcoral;
}

#GND {
  top: 50px;
  left: 15px;
//background-color: lightskyblue;
}

#clA {
  top: 0px;
  left: 0px;
  height: 36px;
  width: 25px;
//background-color: lightcoral;
}

#clD {
  top: 0px;
  left: 25px;
  height: 36px;
  width: 25px;
//background-color: lightskyblue;
}

.input {
  height: 40px;
  width: 30px;
//background-color: grey; position: absolute; border: 1px solid white; box-sizing: border-box;
}

.tec2screenBlock {
  position: absolute;
  border: 1px solid white;
//background-color: white
}

.powerCables {
  position: absolute;
  top: 180px;
  left: 180px;
  width: 82px;
  height: 50px;
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
  background-color: white !important;
}

</style>

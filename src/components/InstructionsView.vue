<template>
  <div>
    <h1>Instructions View</h1>
    <p>this is a test</p>
    <p>instructions view</p>
        <p>Here goes the Store Variable: <br>{{getTestVar}}</p>
    <button @click="myOwnAction">set new testVar</button>
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
      test: 1,
    }
  },
  computed: {
    ...mapGetters([
      'getTestVar'
    ]),
  },
  methods: {
    ...mapActions([
      'setTestVar',
    ]),
    myOwnAction() {
      this.setTestVar('changed now');
      console.log("test log to console");
    }
  }
}
</script>

<style scoped>

</style>

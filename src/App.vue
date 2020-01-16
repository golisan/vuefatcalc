<template>
  <div id="app">
    <img alt="Calc logo" src="./assets/calc.png" width="50" height="50" align="left">
    <br>
    <HelloWorld msg="Willkommen zu deinem Fett-Rechner"/>
  </div>
</template>

<script>
import Calc from './components/Calc.vue'

export default {
  name: 'app',
  components: {
    HelloWorld: Calc
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

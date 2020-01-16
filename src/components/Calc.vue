<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Heute</h2>
  </div>
  <div id="components-demo">
  <button-counter></button-counter>
  </div>
</template>

<script>
export default {
  name: 'Calc',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

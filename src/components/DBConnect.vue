<template>
   <button @click="connect()">Connect to Database</button>
   <p> {{ info }} </p>
</template>

<script>
export default {
  data(){
    return{
      info: null
    }
  },

  methods:{
    connect(){
      console.log("Button Pressed")
      axios
        .get('http://localhost:8000/Test.sqlite', {
          headers: {"Access-Control-Allow-Origin": "*"}
        })
        .then(response => (this.info = response))
    }
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


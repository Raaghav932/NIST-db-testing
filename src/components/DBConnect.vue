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

  mounted(){
      let connector = document.createElement('script');
      connector.setAttribute('src', 'http://localhost:8000/dbConnection.js')
      document.head.appendChild(connector)
      console.log("dfasdfas")
    },

  methods:{

    connect(){
      console.log('connecting')
      connection()
  //     const sqlite3 = require('sqlite3').verbose()
  //     let db = new sqlite3.Database('../../../sampleDB/test1.sqlite', (err) => {
  // if (err){
  //    return console.error(err.message)
  // }
  // console.log("connected to the database")
  // })
      
  //     db.close((err) => {
  // if (err) {
  //     return console.error(err.message)
  // }
  // console.log('closed the connection')
  //     })
  
  //     console.log("Button Pressed")
  //     axios
  //       .get('http://localhost:8000/Sqlite.sql', {
  //         headers: {"Access-Control-Allow-Origin": "*"}
  //       })
  //       .then(response => (this.info = response.data))
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


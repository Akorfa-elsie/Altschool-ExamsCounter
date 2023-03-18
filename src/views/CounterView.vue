<template>
    <center>

    <h1>{{ msg }}</h1>
    <h2> Count Value: {{ counter }}</h2>
    
    <div class='btns'>
    <button class='m-r' @click='increase'>Increment </button> 
    </div>
    <div>
    <button class='m-r' @click='decrease'>Decrement </button> 
    </div>
    <div>
    <button class='n-r' @click='reset'>Reset </button> 
    </div>

  <div>
    <input type="text" class='o-r'   
      v-model="count"
      name="add">
    <button class='j-r' @click='setValue'>Set Value</button>
  </div>
  
  <div><router-link to="/" class="home"><b><i>Go back to Home page</i></b></router-link></div>

    </center>
    
</template>

<script>
export default {
  name: 'CounterView',
  data() {
    return {
      msg: 'A Counter App',
      counter: 0,
      count:''
    }
  },
  methods: {
    increase() {
      this.counter++
    },  
    decrease() {
      this.counter--
    },
    reset() {
      this.counter = 0
    },
    setValue() {
      this.counter += +this.count 
      this.count = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h2 {
  margin: 40px 0 0;
  color:lightgreen;
}
h2{
  font-size: 30px;
}

.btns {
  margin: 20px 0;

}
.m-r {
  margin-right: 10px;
  color: white;
  font-size: 30px;
  background-color: lightgreen;
  border-radius: 12px;
  width: 300px;
  height: 100px;
  margin: 5px 5px;
  margin-bottom: 20px;
  cursor: pointer;
}

  .n-r{
    margin-right: 20px;
    color: white; 
    background-color: violet;
    border-radius: 5px;
    width: 100px;
    height: 50px;
    cursor: pointer;
    font-size: 24px;
    margin-bottom: 20px;
    margin-left: 20px;
  }
  .j-r{
    margin-right: 20px;
    color: white;
    border-radius: 50px;
    width: 150px;
    height: 80px;
    cursor: pointer;
    background-color: lightgreen;
    font-size: 25px;
    margin-bottom: 50px;
  }
  .o-r {
  margin-right: 10px;
  color: white;
  font-size: 20px;
  background-color:lightgreen;
  border-radius: 12px;
  width: 200px;
  height: 50px;
  margin-bottom: 50px;
}
.home{
  color:white;
  font-size: 20px;
  /* margin-top: 20px; */
  font-size: 22px;
}
</style>

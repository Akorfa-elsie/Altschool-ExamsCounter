<template>
  <center>
    <p class="para1">....Error (404) Page</p>
    <p class="para2">Uh oh..you have landed on a wrong page, kindly click on the link below to redirect you!</p>
    <router-link to="/counter" class="error"><b><i>Go back to Counter page</i></b></router-link>
    
  </center>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.para1{
  color: white;
  font-size: 50px;

}
.para2{
  color: white;
  font-size: 30px;
  margin-bottom: 100px;
}

.error{
  color:white;
  font-size: 25px;
  /* margin-top: 100px; */
}


</style>
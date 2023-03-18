<template>
    <header class="header">
        <nav>
          <ul>
            <li>
              <router-link to="/" >Home</router-link>
            </li>
            <li><router-link to="/counter" >CounterApp</router-link></li>
            <li><router-link to="/NotFound">ErrorPage</router-link></li>
          </ul>
          
        </nav>
        <section class="wrapper__main">
            <section class="home_page">
                <div class="text">
                    <h1>A Counter App built with VueJs</h1>
                </div>
                <router-link to="/counter" class="a"><b>Proceed to Counter App</b></router-link>

                <div class="btn_github">
                
                <button class="github">
                    <a class="git" href="https://github.com/akorfa-elsie"><b>Checkout my GitHub repo</b></a>
                </button>
            </div>
                
            </section>
        </section>
        
    </header>

     
</template>


<script>
export default {
    name:'HomePage'
}
</script>


<style scoped>
.header{
    width: 100%;
    height: 100%;
    clip-path: ellipse(100% 55% at 44% 37%);
    
    

}    
nav {
  justify-content: space-between;
  align-items: center;
  width: 100vw;
}

.navbar{
    gap:10px;
  margin-right: 15px;
}
nav ul {
  list-style: none;
  display: flex;
  float: right;
  gap:10px;
  margin-right: 15px;
}

nav ul li {
  margin: 0 1rem;
  font-family: Arvo;
}

nav ul li a {
  text-decoration: none;
  color: #ffff;
  font-size: 2rem;
  font-weight: bold;
}

nav ul li a:hover {
  text-decoration: underline;
  
}
.wrapper__main{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;        
}

.home_page{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 500px;
    animation-name: home-textBox;
    animation-duration: 2s;
    animation-iteration-count: 2s;
    height: 500px;
    align-items: center;
    justify-content: center;
    
}

h1{
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.2rem;
}
.p{
    font-size: 20px;
    font-family: bahnschrift;
    padding: 1rem 0rem;
}
.text{
    text-align: center;
    color: white;
    
}
.a{
    color:aqua;
    text-decoration: none;
    font-weight: bolder;
    padding-top: 8px;
    width: 250px;
    text-align: center;
    height: 40px;
    font-size: 20px;
    background: #fff;
    border: 1px solid white;
    border-radius: 20px;
    font-size: 22px;
}
.a:hover{
    color: rgb(228, 70, 97);
    transition: 0.4s;
}
@keyframes home-textBox{
    from{
        opacity: 0.5;
        transform: translateY(100%);
    }
    to{
        opacity: 1;
        transform: translateY(0%);
    } 
 }

.github{
    background-color: aqua;
    padding-left: 0.4rem;
    width: 250px;
    height: 55px;
    border-radius: 20px;
    margin: auto;
    border: none;
    text-align: center; 
    align-items: center;
    justify-content: center;
    
}
.github a{
    color: white;
    font-size: 20px;
    text-decoration: none;
    /* color: rgb(228, 70, 97);
    background-color: rgba(255, 255, 255, 0.605);
    transition: 0.4s; */
}

.git:hover{
  color: rgb(228, 70, 97);
    transition: 0.4s; 
    
}
.btn_github{
    margin-top: 30px;
}
</style>
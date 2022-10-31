<template>

  <div id="topzone">
    
    <nav id="navzone">

      <AuthApp />

      <h1 @click="this.$router.push('/')" >EfreiShop</h1>

      <div id="routers">
        <router-link to="/">Home</router-link>
        <router-link to="/cart">Cart</router-link>
      </div>

    </nav>

  </div>

</template>

<script>
import AuthApp from './AuthApp.vue';


export default {

  name: "navbar",
    
  created() { },
    
  data() {
      
    return {
      
    };
  },
    
  props: {},
    
  methods: {},
    
  components: { AuthApp }

};

</script>

<style lang="css" scoped>

h1 {
    font-size: 2.5em;
    font-weight: 600;
    color: rgb(255, 255, 255);
    margin: 0;
    padding: 0;
    margin-left: 1em;
    cursor: pointer;
}

#topzone{
  width: 100%;
  height: fit-content;
  background-color: #222;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

}

#navzone{
  width: 100%;
  
  background-color: #222;

  padding: 1vw;

  display: flex;

  justify-content: space-between;
}

a {
  color: #222;
  text-decoration: none;
  font-size: 1.7vh;
  font-weight: bold;
  background-color: white;
  padding: 1vh;
  border-radius: 1vh;
  margin: 1vh;
}

a:hover {
  color: white;
  text-decoration: none;
  font-size: 1.7vh;
  font-weight: bold;
  background-color: #222;
  padding: 1vh;
  border-radius: 1vh;
  margin: 1vh;
  border: white solid 1px;
}
a.router-link-exact-active{
  color: white;
  text-decoration: none;
  font-size: 1.7vh;
  font-weight: bold;
  background-color: #222;
  padding: 1vh;
  border-radius: 1vh;
  margin: 1vh;
  border: white solid 1px;
}

</style>
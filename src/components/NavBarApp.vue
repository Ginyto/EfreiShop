<template>

  <div id="topzone">

    
    
    <nav id="navzone">

      <AuthApp />

      <div id="routers">
        <router-link to="/">Home</router-link>
        <router-link to="/about">Cart</router-link>
        <router-link to="/sneakervue">Sneaker</router-link>
      </div>

    </nav>
    
    <div id="searchbar">
      <Icon id="loupe" icon="line-md:search-twotone"></Icon>
      <input type="text" placeholder="Search..." />
    </div>

  </div>

</template>

<script>
import AuthApp from './AuthApp.vue';


export default {
    name: "Test",
    created() { },
    data() {
        return {};
    },
    props: {},
    methods: {},
    components: { AuthApp }
};

</script>

<style lang="css" scoped>

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
  background-color: #222;
  border: 1px solid white;
}
a.router-link-exact-active{
  color: white;
  background-color: #222;
  border: 1px solid white;
}


#searchbar {
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: aqua; */
  margin-bottom: 2vh;
}
  
#searchbar input {
  width: 50%;
  height: 4vh;
  border-radius: 1vh;
  border: none;
  padding: 0 1vh;
}
  
#loupe {
  width: 4vh;
  height: 4vh;
  color: white;
  border-radius: 1vh;
  padding: 0.3vh;
}
</style>
<template>

  <div id="topzone">
    <nav id="navzone">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    
    <div id="searchbar">
      <Icon id="loupe" icon="line-md:search-twotone"></Icon>
      <input type="text" placeholder="Search..." />
    </div>
  </div>

</template>

<script>

export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};

</script>

<style lang="css" scoped>


#topzone{
  height: fit-content;
  background-color: #222;
  position: sticky;
  top: 0;
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
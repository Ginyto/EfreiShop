<template>
  <div id="homezone">


    <div id="store">
      <SneakerApp />
      <SneakerApp />
      <SneakerApp />
      <SneakerApp />
      <SneakerApp />
    </div>

  </div>
</template>

<script>
import SneakerApp from '@/components/SneakerApp.vue';
// @ is an alias to /src


export default {
  name: 'HomeView',

  data() {
    return {
      sneakers : []
    };
  },

  components: {
    SneakerApp
  },

  methods: {
  },

  computed: {
    
  },

  mounted() {
  },

  created() {

  }

}
</script>

<style lang="css" scoped>

#homezone {
  width: 100vw;
  height: 100%;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: antiquewhite; */
}

#searchbar {
  width: 100%;
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

#loupe{
  width: 4vh;
  height: 4vh;
  color: white;
  border-radius: 1vh;
}

#store {
  width: 100%;
  height: 100%;
  min-height: fit-content;
  display: flex;
  justify-content: center;
  
  flex-wrap: wrap;
  /* background-color: brown; */
}

</style>

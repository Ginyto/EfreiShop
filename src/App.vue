<template>

  <div id="mainzone">

    <core-app-slot>
    
      <router-view/>
    
    </core-app-slot>

  </div>

</template>


<script>

import CoreAppSlot from './components/CoreAppSlot.vue';

export default {
    name: "Main",
    created() { },
    data() {
        return {};
    },
    props: {},
    methods: {},
    components: { CoreAppSlot }
};

</script>


<style>

*, ::before,::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#mainzone {
  background-color: #222;
  overflow-x: hidden;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

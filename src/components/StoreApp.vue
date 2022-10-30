<template>
  <div id="store">
    <div v-for="sneaker in sneakers" :key="sneaker.id">
      <SneakerApp :sneak="sneaker" />
    </div>
  </div>
</template>

<script>
import SneakerApp from './SneakerApp.vue';
import axios from 'axios';

export default {

  name: "Store",

  created() {

    this.getAllSneakers();

  },
  data() {
    return {

      sneakers: []

    };
  },
  props: {
    
  },
  methods: {

    async getAllSneakers() {
      
      await axios.get('http://localhost:3000/api/sneakers')
        .then(response => {
          this.sneakers = response.data;

          // this.sneakers.forEach(element => (console.log(element)));

        })
        .catch(error => {
          console.log(error);
        })
    }
    
  },
  components: { SneakerApp }

};
</script>

<style lang="css" scoped>

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
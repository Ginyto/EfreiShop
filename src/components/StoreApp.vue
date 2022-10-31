<template>

  <div id="searchbar">

    <input type="text" placeholder="Search..." @keyup="looking($event)" />

  </div>

  <div id="store">

    <h1 v-show="!found">NO SNEAKER FOUND</h1>

    <div v-for="sneaker in sneakers" :key="sneaker.id" v-auto-animate>
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

      sneakers: [],

      url: "http://localhost:3000/sneak/",

      found: true

    };
  },
  props: {
    
  },

  methods: {

    async getAllSneakers() {

      await axios.get(this.url + 'sneakers')
        .then(response => {
          this.sneakers = response.data;

          this.sneakers.forEach(element => (
            element.qte = 1
          ));

        })
        .catch(error => {
          console.log(error);
        })
    },

    async looking(event) {

      await axios.post(this.url + 'sneakersname', {
        name : event.target.value
      }).then(response => {

        this.sneakers = response.data;

        this.sneakers.forEach(element => (
          element.qte = 1
        ));

        if (this.sneakers.length == 0) {
          this.found = false;
        } else {
          this.found = true;
        }

      }).catch(error => {
        console.log(error);
      })

    }

  },

  components: { SneakerApp },

};
</script>

<style lang="css" scoped>

h1{
  color: white;
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

#searchbar {
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: aqua; */
  margin-bottom: 2vh;
}

#searchbar input {
  width: 80vw;
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
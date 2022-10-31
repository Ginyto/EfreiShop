<template>
  <div id="cartzone">


    <button class="btn" @click="validate">Validate</button>

    <div id="store">
    
      <div v-for="trans in transactions" :key="trans.id" v-auto-animate>
        <SneakerApp :sneak="trans.product" />
      </div>
    
    </div>

  </div>
</template>

<script>

import { Icon } from '@iconify/vue';
import SneakerApp from '@/components/SneakerApp.vue';
import { useCartStore } from '@/store/cart';
import axios from 'axios';

const cart = useCartStore();

export default {

  name: "Cart",

  created() {
  },
  
  data() {
    return {

      transactions: cart.getcart

    };
  },
  props: {

  },
  methods: {

    async validate() {

      cart.clean();
    }

  },

  components: { Icon, SneakerApp }

};
</script>

<style lang="css" scoped>

#cartzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  /* background-color: aqua; */
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

.btn {
  width: 100px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  color: #222;
  border: none;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
}

</style>
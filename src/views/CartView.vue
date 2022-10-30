<template>
  <div>
    {{cart}}
    <store-app></store-app>


      <div class="cart">
      </div>

    
  </div>
</template>

<script>
//import StoreApp from '@/components/StoreApp.vue';
import axios from 'axios';

export default {
  name: "Cart",
  created (){
    this.getCart();
  }, 
  data() {
    return {
      cart: {

      }
    };
  },
  props: {},
  methods: {
    async getCart(){
      await axios.get("http://localhost:3000/sneak/carts").then (res=>{
        this.cart = res.data;
        console.log(this.cart)    
      })

    }
  },
};
</script>

<style lang="css" scoped>

</style>
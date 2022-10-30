<template>
  <div>
    
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
      id:null,
      cart: {}
    };
  },


  props: {
  },
  methods: {
    async getCart(){
      await axios.get("http://localhost:3000/sneak/carts").then (res=>{

        const currentCart = res.data.cart
        const cart = { id:currentCart.id}
        this.cart =  JSON.parse(sessionStorage.getItem('cart'))

        console.log(this.cart);

        //this.cart=  JSON.parse(sessionStorage.getItem('cart'))

      }) 
    }
  },
};
</script>

<style lang="css" scoped>

</style>
<template>
  <div id="sneakzone">

    <img :src="images[0]" :alt="sneak.name" @click="openVue()">

    <div id="info" >
      <div id="sectinfo">
        <div>{{sneak.brand}}</div>
        <div>{{sneak.name}}</div>
        <div>{{sneak.color}}</div>
        <div>{{sneak.price}}＄ </div>
      </div>

      <div id="secsize">
        SIZE <Icon icon="line-md:arrow-down-circle-twotone"></Icon>
        <select name="" id="size">
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
        </select>
      </div>

      <div id="sectbtn">
        <div id="plusmoins">
          <button id="moins" @click="moins"> <Icon icon="line-md:minus-circle-twotone"></Icon> </button>
            <div id="quantite">{{sneak.qte}}</div>
          <button id="plus" @click="plus"> <Icon icon="line-md:plus-circle-twotone"></Icon> </button>
        </div>
        <button id="btnadd" @click="addToCart">Add to cart<Icon icon="ic:round-shopping-cart-checkout"></Icon></button>
      </div>
    </div>

  </div>

</template>

<script>

import { useSneakersStore } from "../store/sneakers";
import { useCartStore } from "../store/cart";
import { useCurrentStore } from "../store/current";


const store = useSneakersStore();
const cart = useCartStore();
const current = useCurrentStore();


export default {
  name: "Sneaker",

  created() {
    
  },
  
  data() {
    return {

      images : this.sneak.images.split('§')

    };
  },

  props: {
    sneak: Object,
  },

  methods: {

    plus(){
      this.sneak.qte++;
    },

    moins(){
      if(this.sneak.qte > 1){
        this.sneak.qte--;
      }
    },

    openVue() {
      console.log("openVue");

      store.currentSneaker(this.sneak);

      this.$router.push("/sneakervue");
    },

    addToCart() {

      console.log("addToCart");

      if (current.current != null) {

        for (let i = 0; i < this.sneak.qte; i++) {
          cart.addProductToCart(this.sneak, current.current);
        }

        console.log(cart.getcart);

      }else{
        console.log("not connected");
        alert("You must be connected !");
      }

    }

  },

  components: {},

  computed: {}
  
};
</script>

<style lang="css" scoped>

img{
  width: 22vw;
  min-width: 260px;
  height: 49vh;
  border-radius: 1vh;
  cursor: pointer;
}


#sneakzone {
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 1vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1vh;

  margin: 1vh;

}

#info {
  width: 100%;
  height : fit-content;
  display : flex;

  justify-content: space-between;

  margin-top: 1vh;


  color: white;
  font-size: 2vh;
  font-weight: bold;

  border: 1px solid rgb(255, 255, 255);
  border-radius: 1vh;

}

#sectinfo {
  padding: 1vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#sectbtn {
  padding: 1vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

#plusmoins {
  display: flex;
  justify-content: space-around;
}

button {
  width: fit-content;
  height: fit-content;
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-size: 2vh;
  font-weight: bold;
  border-radius: 1vh;
  cursor: pointer;
  padding: 0.5vh;
  display: flex;
  justify-content: center;
}

#secsize {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

#size {

  border-radius: 1vh;

  border: none;

  background-color: #222;

  color: white;

  border: white solid 2px;

  font-size: 2vh;

  padding: 1vh;

  appearance: none;

  cursor: pointer;

}
</style>
<template>
  <div id="itemzone">

    <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0e7fc8f3-76b7-4631-b147-4dad4b1ff241/chaussure-air-jordan-1-mid-6L9QW1.png" alt="Photo">
    <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0fd4ce0b-1657-4a31-b670-3d925774c2a3/chaussure-air-jordan-1-mid-6L9QW1.png" alt="Photo">

    <div id="info">

      <div id="sectinfo">
        <div>Marque : Nike </div>
        <div>Model : Jordan </div>
        <div>Couleur : noir</div>
        <div>Prix : 299＄ </div>
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
          <button id="moins" @click="moins">
            <Icon icon="line-md:minus-circle-twotone"></Icon>
          </button>
          <div id="quantite">{{ qte }}</div>
          <button id="plus" @click="plus">
            <Icon icon="line-md:plus-circle-twotone"></Icon>
          </button>
        </div>
        <button id="btnadd">Add to cart <Icon icon="ic:round-shopping-cart-checkout"></Icon></button>
      </div>
    </div>

    <SectionComs />


  </div>

</template>

<script>

import SectionComs from "./SectionComs.vue";

export default {
  name: "SneakerVue",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  components: {
    SectionComs
  }
  
};
</script>

<style lang="css" scoped>
img{
  width: 60vh;
  border-radius: 1vh;
}

#itemzone {
  width: 100vw;
  border: solid 1px rgb(242, 96, 96);
  display: flex;
  align-items: flex-start;
}

#sectinfo {
  padding: 1vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#info {
  width: 100%;
  height: fit-content;
  display: flex;

  justify-content: space-between;


  color: white;
  font-size: 2vh;
  font-weight: bold;

  border: 1px solid rgb(255, 255, 255);
  border-radius: 1vh;

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

#secsize{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

#size{

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
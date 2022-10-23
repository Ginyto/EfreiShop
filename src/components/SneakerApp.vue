<template>

  <div id="sneakzone">

    <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/af4e8cbb-e93a-4652-8f85-93d6515390ff/chaussure-de-basketball-renew-elevate-3-GLq50X.png" alt="Photo">

    <div id="info" >
      <div id="sectinfo">
        <div>Marque : Nike </div>
        <div>Model : Jordan </div>
        <div>Couleur : noir</div>
        <div>Prix : 299＄ </div>
      </div>
      <div id="sectbtn">
        <div id="plusmoins">
          <button id="moins"> <Icon icon="line-md:minus-circle-twotone"></Icon> </button>
            <div id="quantite">1</div>
          <button id="plus"> <Icon icon="line-md:plus-circle-twotone"></Icon> </button>
        </div>
        <button id="btnadd">Add to cart  <Icon icon="ic:round-shopping-cart-checkout"></Icon></button>
      </div>
    </div>

  </div>

</template>

<script>

export default {
  name: "Sneaker",
  created() {},
  data() {
    return {
      
    };
  },
  props: {},
  methods: {
  },
};
</script>

<style lang="css" scoped>
img{
  width: 22vw;
  min-width: 260px;
  border-radius: 1vh;
}


#sneakzone {
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 1vh;

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


</style>
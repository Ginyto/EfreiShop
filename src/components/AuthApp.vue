<template>
  <div id="authzone">
    <input placeholder="Account">
    <input placeholder="Password">
  </div>
</template>

<script>
export default {
  name: "Auth",

  created() {},
  data() {
    return {
      url : "http://localhost:3000/login/"
    };
  },

  props: {},

  methods: {},

};
</script>

<style lang="css" scoped>

#authzone {
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 1vh;
  background-color: rgb(242, 96, 96);
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>
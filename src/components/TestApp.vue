<template>
  <div>
    This is a super cool Icone <Icon icon="line-md:coffee-twotone" />
  </div>

  <div id="box" >
    <div @click="test = !test " v-auto-animate >
      this is a test animation
      <div v-if="test">And it's works perfectly</div>
    </div>
  </div>

</template>

<script>


export default {
  name: "Test",
  created() {},
  data() {
    return {
      test : false
    };
  },

  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>

</style>
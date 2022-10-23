<template>

  <div id="corezone">

    <NavBarApp />

    <div id="slot">
      <slot></slot>
    </div>

    <FooterApp />

  </div>

</template>

<script>

import NavBarApp from './NavBarApp.vue';
import FooterApp from './FooterApp.vue';

export default {
    name: "Test",
    created() { },
    data() {
        return {};
    },
    props: {},
    methods: {},
    components: { NavBarApp, FooterApp }
};
</script>

<style lang="css" scoped>
#corezone{
  width: 100vw;
  height: 100vh;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
}


#slot {
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  min-height: fit-content;
  flex-grow: 1;
  /* background-color: yellow; */
  background-color: #222;

}
</style>
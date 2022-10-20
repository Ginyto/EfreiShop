<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TestApp />
  </div>
</template>

<script>
import TestApp from '@/components/TestApp.vue';
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    TestApp
}
}
</script>

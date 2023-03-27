<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavbarMobile from './components/NavbarMobile.vue';

// import { VueQueryDevTools } from "vue-query/devtools";

// export default defineComponent({
//   name: "App",
//   components: { VueQueryDevTools },
// });
</script>

<template>
  <NavbarMobile />
  <RouterView />
  <!-- <VueQueryDevTools /> -->
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #f9f4eb;
}
</style>

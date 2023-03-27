<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavbarMobile from './components/NavbarMobile.vue';
import { useToast } from "vue-toastification";

// import { VueQueryDevTools } from "vue-query/devtools";

// export default defineComponent({
//   name: "App",
//   components: { VueQueryDevTools },
// });

// Get toast interface
const toast = useToast();

// Use it!
toast.success("Le formulaire a bien été envoyé", {
        timeout: 2000
      });

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

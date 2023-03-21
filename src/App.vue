<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavbarMobile from './components/NavbarMobile.vue';
import main from './styles/main.scss'


</script>

<template>
  <NavbarMobile />

  <RouterView />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@media (min-width: 1024px) {
  
}
</style>

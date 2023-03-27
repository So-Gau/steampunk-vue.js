<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavbarMobile from './components/NavbarMobile.vue';
import main from './styles/main.scss'
import HomeView from './views/HomeView.vue';
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
body {
  background-color: #f9f4eb;
}
</style>

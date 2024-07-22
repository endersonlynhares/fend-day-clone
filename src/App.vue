<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { inject, onMounted } from 'vue';

onMounted(() =>{

})
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
  <FooterComponent />
</template>

<style scoped>
  .container {
    padding-bottom: 90px;
  }
</style>

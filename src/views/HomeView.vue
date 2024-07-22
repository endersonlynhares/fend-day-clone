<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import { RouterLink } from 'vue-router';
const routes = ['Solidario', 'Meia', 'Camisas', 'Outros']


</script>

<template>
  <HeaderComponent typeHeader="home" />
  <main> 
    <RouterLink class="link" v-for="item in routes" :to="'participantes/'+item.toLowerCase()">{{ item }}</RouterLink>
  </main>
</template>

<style scoped>

  main {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
  }

  .link {
    width: 245px;
    height: 244px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #F5EBFF;
    color: #A855F7;
    text-decoration: none;
    font-weight: 800;
  }
</style>

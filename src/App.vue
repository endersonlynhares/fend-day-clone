<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { inject, onMounted } from 'vue';
import { useCheckinStore } from './stores/checkin';

const checkinStore = useCheckinStore()

onMounted(async () =>{
  const { success, status } = await checkinStore.dispatchGetParticipants()

  if (!success) {
    alert("Ups, something happened 🙂");
    console.log("Api status ->", status);
  }

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

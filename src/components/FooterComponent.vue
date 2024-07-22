<template>
  <footer>
    <img alt="Vue logo" class="logo" src="@/assets/logo_frontce.svg" height="40px" />
    <span>frontendce.com.br</span>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
  footer {
    color: #5D7BD5;
    position: absolute;
    bottom: 0;
    gap: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 13px;
    background-color: #D9D9D9;
  }

  @media (max-width: 1024px){
    footer {
      position: relative;
      margin-top: 40px;
    }
  }
</style>
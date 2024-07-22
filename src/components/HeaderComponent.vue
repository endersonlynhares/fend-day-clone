<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo_fend.svg" width="125"  />
    <div v-if="props.typeHeader === 'home'" class="header__home">
      <h1>Checkin dos participantes</h1>
      <div class="border-rounded"></div>
      <span>Selecione um tipo de ingresso</span>
    </div>
    <div class="header__ticket" v-if="props.typeHeader === 'checkin'">
      <h1>Checkin: {{ props.typeCheckin }}</h1>
      <RouterLink to="/orders" class="button_qr">
        <i><Cam /></i>
        Ler QR Code
      </RouterLink>
    </div>
    <div class="header__ticket" v-if="props.typeHeader === 'qr_code'" @click="handleQrCodeClick">
      <h1>Checkin: {{ props.typeCheckin }}</h1>
      <button class="button_qr">
        <i><Cam /></i>
        Ler QR Code
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
  interface HeaderProps {
    typeHeader: 'home' | 'checkin' | 'qr_code',
    typeCheckin?: string
  }

  const props = defineProps<HeaderProps>()
  const emit = defineEmits(['qrCodeClicked'])

  const handleQrCodeClick = () => {
    emit('qrCodeClicked')
  }

  import Cam from './icons/Cam.vue';
</script>

<style scoped>
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 65px;
  }

  .header__home, .header__ticket{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .border-rounded {
    width: 108px;
    height: 4px;
    border-radius: 3px;
    margin-top: 12px;
    margin-bottom: 9px;
    background-color: blueviolet;
  }

  .header__home h1, .header__ticket h1{
    margin-top: 15px;
    font-weight: 900;
    font-size: 24px;
  }

  .header__home span {
    font-weight: 500;
    font-size: 18px;
  }

  .button_qr, button {
    font-family: Poppins;
    font-size: 15px;
    text-decoration: none;
    margin-top: 15px;
    background-color: var(--purple-700);
    border: none;
    color: var(--color-text);
    font-weight: 700;
    padding: 8px 16px 8px 16px;
    border-radius: 6px;
    display: flex;
    gap: 8px;
    cursor: pointer;
  }

  .button_qr:hover{
    background-color: var(--purple-900);
    transition: background-color 0.2s ease;
  }

</style>
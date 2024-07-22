<template>
  <HeaderComponent typeHeader="qr_code" typeCheckin="QR Code" @qrCodeClicked="onQrCodeClicked" />
  <main>
    <div class="qr-code">
        <qrcode-stream v-if="showQrCode" @detect="onDetect" />
    </div>
    {{ result }}
  </main>
</template>
<script setup lang="ts">
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import { QrcodeStream } from 'vue-qrcode-reader';
  import { onMounted, ref } from 'vue';
  const result = ref('')
  const showQrCode = ref(false)
  
  const onQrCodeClicked = () =>{
    showQrCode.value = !showQrCode.value  
  }
  function onDetect(detectedCodes: any) {
    result.value = JSON.stringify(detectedCodes.map((code: any) => code.rawValue))
    console.log(result.value)
  }

  const requestCameraPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
    } catch (err) {
      console.error('Erro ao solicitar permissão para a câmera:', err);
    }
  };
  
  onMounted(() => {
    requestCameraPermission();
  });
</script>

<style scoped>
  .qr-code{
    width: 200px;
    height: 200px;
    background-color: #FFFFFF;
    align-self: center;
    border: 1px solid #CBD5E1;
  }

  main{
    color: var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1050px;
    margin: 0 auto;
    border-radius: 10px; 
    background-color: #ECECEC;
    padding: 50px 90px;
  }

  @media (max-width: 600px) {
        main {
          border-radius:opx;
            width: 100%;
            padding: 48px 28px 48px 28px;
            border-radius: 0; 
        }
    }
</style>
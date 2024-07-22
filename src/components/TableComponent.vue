<template>
  <div v-if="hasFilter" class="filter-group">
      <label for="search">Pesquisar Partipantes</label>
      <input
          type='text'
          placeholder="Nome, email, cpf ou número do pedido"
          v-model="searchTerm"
      />
  </div>

  <div class="table">
      <div class="participant-checkin" v-for="participant in filteredParticipants" :key="participant.id">
          <div class="info-participants">
              <span class="title-participant"> {{participant.name}} </span>
              <span class="order-participant"> {{participant.order}} </span>
          </div>
          <button @click="handleOpen(participant)" :disabled="participant.checkin" :class="participant.checkin ? 'checked' : 'unchecked'">{{ participant.checkin ? 'Checkin feito' : 'Fazer checkin' }}</button>
      </div>
  </div>

  <ConfirmCheckinModal
    :isVisible="isModalVisible"
    :userName="selectedParticipant?.name ? selectedParticipant?.name : ''"
    @update:visible="isModalVisible = $event"
    :onConfirm="handleConfirm"
    :onCancel="handleCancel"
    :onClose="handleClose"
  />

</template>

<script setup lang="ts">
  interface Props {
    hasFilter:Boolean,
    data: Participante[]
  }
  import { ref, computed } from 'vue';
  import ConfirmCheckinModal from './ConfirmCheckinModal.vue';
  import type { Participante } from '@/models/checkin';
  const searchTerm = ref('');
  const props = defineProps<Props>()

  const filteredParticipants = computed(() => {
  return props.data.filter(participant => {
      const searchLower = searchTerm.value.toLowerCase();
      return (
          participant.name.toLowerCase().includes(searchLower) ||
          participant.order.toLowerCase().includes(searchLower)
      );
  });
  });

  const isModalVisible = ref(false)
  const selectedParticipant = ref<Participante | null>(null);

  function handleConfirm() {
      if (selectedParticipant.value) {
          selectedParticipant.value.checkin = true;
      }
  }

  function handleCancel() {
      isModalVisible.value = false
  }

  function handleClose() {
      isModalVisible.value = false
  }
  
  function handleOpen(participant: Participante){
      selectedParticipant.value = participant;
      isModalVisible.value = true
  }
</script>

<style scoped>
  .table{
      color: var(--black);
      width: 100%;
      max-height: 400px;
      overflow-y: scroll;
  }

  label{
      font-weight: bold;
      color: var(--black);
  }

  .filter-group{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: self-start;
      margin-bottom: 20px;
  }

  .filter-group input{
      width: 100%;
      padding: 8px 12px 8px 12px;
      border-radius: 6px;
      border: 1px solid gray;
      margin-top: 10px;
  }

  .participant-checkin{
      width: 100%;
      display: flex;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid gray;
      padding: 15px;
  }

  .info-participants{
      display: flex;
      align-items: center;
      gap: 7px;
  }

  .title-participant{
      font-weight: 400;
      font-size: 16px;
  }

  .order-participant{
      color: #6D6D6D;
      font-size: 12px;
  }

  button{
      width: 100px;
      cursor: pointer;
      border: none;
      padding: 4px;
      border-radius: 2px;
  }

  .checked {
      color: #007728;
      background-color: #84FFAE;
      cursor: not-allowed
  }

  .unchecked {
      background-color: #D9B1FF;
      color: #832BD8;
  }
</style>
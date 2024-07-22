<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-overlay" @click="handleClose">
      <div class="modal-content" @click.stop>
        <div class="modal-close" @click="handleClose">X</div>
        <div class="modal-infos">
          <h1>Verifique a comprovação</h1>
          <p>Confira se os dados conferem do pedido<br> e do documento de identificação</p>
        </div>

        <div>
          <h2>{{ userName }}</h2>
        </div>

        <div class="modal-actions">
          <button class="action-cancel" @click="handleCancel">Cancelar</button>
          <button class="action-confirm" @click="handleConfirm">Confirmar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const props = defineProps<{
  isVisible: boolean;
  userName: string
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
}>();

const emit = defineEmits(['update:visible']);

const handleConfirm = () => {
  if (props.onConfirm) {
    props.onConfirm();
  }
  closeModal();
};

const handleCancel = () => {
  if (props.onCancel) {
    props.onCancel();
  }
  closeModal();
};

const handleClose = () => {
  if (props.onClose) {
    props.onClose();
  }
  closeModal();
};

const closeModal = () => {
  emit('update:visible', false);
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: relative;
  background-color: white;
  width: 436px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-radius: 12px;
}

.modal-infos {
  margin-bottom: 27px;
}

.modal-content h1 {
  color: #832BD8;
  font-size: 20px;
  font-weight: 900;
}

.modal-content h2 {
  font-size: 18px;
  font-weight: 900;
}

.modal-content p {
  font-size: 14px;
  font-weight: 400;
}

.modal-content button {
  width: 99px;
  height: 33px;
  border: 0;
  color: white;
  border-radius: 2px;
}

.modal-content button:hover {
  filter: brightness(0.9);
  cursor: pointer;
}

.modal-actions {
  display: flex;
  gap: 14px;
  margin-top: 27px;
}

.action-confirm {
  background-color: #832BD8;
}

.action-cancel {
  background-color: #8D8D8D;
}

.modal-close {
  position: absolute;
  top: 9px;
  right: 16px;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
}

@media (max-width: 600px) {
  .modal-content {
    margin: 0 20px;
    padding: 0 10px;
  }

  .modal-content h1 {
    font-size: 16px;
  }

  .modal-content h2 {
    font-size: 14px;
  }

  .modal-content p {
    font-size: 12px;
  }

  .modal-actions button {
    width: 80px;
    height: 27px;
    font-size: 10px;
  }
}
</style>
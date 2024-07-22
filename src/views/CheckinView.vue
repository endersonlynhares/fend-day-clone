<template>
  <HeaderComponent typeHeader="checkin" :typeCheckin="checkinText[typeCheckin]" />
  <main>
    <TableComponent :data="data" :hasFilter="true" />
  </main>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import TableComponent from '@/components/TableComponent.vue';
import { checkinText, type CheckinType, type Participante } from '@/models/checkin';
import { useCheckinStore } from '@/stores/checkin'
import { onMounted, ref } from 'vue';

interface CheckinProps{
  typeCheckin: CheckinType
}

const useCheckin = useCheckinStore()
const data = ref<Participante[]>([])
const props = defineProps<CheckinProps>()

onMounted(() => {
  data.value = useCheckin.getParticipantesByTypeCheckin(props.typeCheckin)
})

</script>

<style scoped>

  main{
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
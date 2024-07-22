import type { CheckinType, Participante } from "@/models/checkin";
import { API } from "@/services";
import type { Participant } from "@/services/participants/types";
import type { AxiosError } from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCheckinStore = defineStore('checkin', () =>{
  const participantes = ref<Participante[]>([
    {
      id: 1,
      name: 'Enderson Aguiar',
      order: '#123 Enderson Aguiar',
      checkin: true,
      typeCheckin: 'meia'
    },
    {
      id: 2,
      name: 'John Doe Matias',
      order: '#124 John Doe Matias',
      checkin: false,
      typeCheckin: 'solidario'
    },
    {
      id: 3,
      name: 'Jane Smith',
      order: '#125 Jane Smith',
      checkin: true,
      typeCheckin: 'camisas'
    },
    {
      id: 4,
      name: 'Robert Johnson',
      order: '#126 Robert Johnson',
      checkin: false,
      typeCheckin: 'outros'
    },
    {
      id: 5,
      name: 'Emily Davis',
      order: '#127 Emily Davis',
      checkin: true,
      typeCheckin: 'meia'
    },
    {
      id: 6,
      name: 'Michael Brown',
      order: '#128 Michael Brown',
      checkin: false,
      typeCheckin: 'solidario'
    },
    {
      id: 7,
      name: 'Jessica Wilson',
      order: '#129 Jessica Wilson',
      checkin: true,
      typeCheckin: 'camisas'
    },
    {
      id: 8,
      name: 'David Martinez',
      order: '#130 David Martinez',
      checkin: false,
      typeCheckin: 'outros'
    },
    {
      id: 9,
      name: 'Laura Anderson',
      order: '#131 Laura Anderson',
      checkin: true,
      typeCheckin: 'meia'
    },
    {
      id: 10,
      name: 'Daniel Taylor',
      order: '#132 Daniel Taylor',
      checkin: false,
      typeCheckin: 'solidario'
    },
    {
      id: 11,
      name: 'Thomas Harris',
      order: '#133 Thomas Harris',
      checkin: true,
      typeCheckin: 'camisas'
    },
    {
      id: 12,
      name: 'Anna Lee',
      order: '#134 Anna Lee',
      checkin: false,
      typeCheckin: 'outros'
    },
    {
      id: 13,
      name: 'Matthew King',
      order: '#135 Matthew King',
      checkin: true,
      typeCheckin: 'meia'
    },
    {
      id: 14,
      name: 'Olivia White',
      order: '#136 Olivia White',
      checkin: false,
      typeCheckin: 'solidario'
    },
    {
      id: 15,
      name: 'Alexander Hall',
      order: '#137 Alexander Hall',
      checkin: true,
      typeCheckin: 'camisas'
    },
    {
      id: 16,
      name: 'Sophia Lewis',
      order: '#138 Sophia Lewis',
      checkin: false,
      typeCheckin: 'outros'
    },
    {
      id: 17,
      name: 'Mia Walker',
      order: '#139 Mia Walker',
      checkin: true,
      typeCheckin: 'meia'
    },
    {
      id: 18,
      name: 'William Young',
      order: '#140 William Young',
      checkin: false,
      typeCheckin: 'solidario'
    },
    {
      id: 19,
      name: 'Ella Harris',
      order: '#141 Ella Harris',
      checkin: true,
      typeCheckin: 'camisas'
    },
    {
      id: 20,
      name: 'James Clark',
      order: '#142 James Clark',
      checkin: false,
      typeCheckin: 'outros'
    }
  ]);

  const participants = ref<Participant[]>([])

  const getParticipantesByTypeCheckin = (typeCheckin: CheckinType): Participante[] => {
    return participantes.value.filter(participante => participante.typeCheckin === typeCheckin);
  };

  const initParticipants = (data: Participant[]) =>{
    participants.value = data
  }

  const dispatchGetParticipants = async () =>{
    try{
      const { status, data } = await API.participants.getAllParticipants();
      if(status == 200){
        console.log(data)
        initParticipants(data)
        return {
          success: true,
          content: null
        }
      }
    }catch(error){
      const _error = error as AxiosError<string>;
      return {
        success: false,
        status: _error.response?.status,
        content: null,
      };
    }

    return {
      success: false,
      content: null,
      status: 400,
    };

  }

  return { participants, getParticipantesByTypeCheckin, initParticipants, dispatchGetParticipants }

})
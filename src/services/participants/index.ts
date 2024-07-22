import http from "../api";
import type { Participant, TicketType } from "./types";

export const getAllParticipants = async () => {
  return await http.get<Participant[]>('participantes')
}

export const getParticipantByTicket = async (ticketType: TicketType) => {
  return await http.get<Participant[]>(`participantes/${ticketType}`) 
}

export default {
  getAllParticipants,
  getParticipantByTicket
}
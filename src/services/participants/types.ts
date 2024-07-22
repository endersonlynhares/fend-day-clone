export type TicketType = {
  id: number,
  name: string 
}

export type Participant = {
    name: string,
    email: string,
    id: number,
    orderId: number,
    ticketType:  TicketType,
    checkedIn: boolean
}
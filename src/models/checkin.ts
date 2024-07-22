export enum checkinText {
  'meia' = 'Ingresso Meia',
  'solidario' = 'Ingresso Solidário',
  'camisas' = 'Camisas',
  'outros' = 'Outros Ingressos'
}

export type CheckinType = 'meia' | 'solidario' |'camisas' | 'outros'

export type Participante = {
  id: number,
  name: string,
  order: string,
  checkin: boolean,
  typeCheckin: CheckinType
}
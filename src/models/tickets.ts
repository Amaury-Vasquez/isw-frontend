export type TicketType = "basico" | "completo" | "gratuito";

export interface ITicketType {
  type: TicketType;
  price: number;
}

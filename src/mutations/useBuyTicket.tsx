import { useMutation } from "@tanstack/react-query";
import { post } from "@/services/api";

const FREE_TICKET_ID = "65997c92f5074375e71cadcb";
const BASIC_TICKET_ID = "65997ce1f5074375e71cadcd";
const FULL_TICKET_ID = "65997d09f5074375e71cadcf";

export type TicketType = "free" | "basic" | "full";

interface BuyTicketParams {
  ticketType: TicketType;
  quantity: number;
}

function getTicketId(type: TicketType) {
  if (type === "free") return FREE_TICKET_ID;
  if (type === "basic") return BASIC_TICKET_ID;
  return FULL_TICKET_ID;
}

export async function buyMuseumTicket(
  ticketType: TicketType,
  quantity: number
) {
  const ticketId = getTicketId(ticketType);
  return await post<{ message: string }>(
    `tickets/buy/${ticketId}?quantity=${quantity}`,
    {
      ticketId,
      quantity,
    }
  );
}

export function useBuyTicket() {
  const {
    mutateAsync: buyTicket,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: ({ ticketType, quantity }: BuyTicketParams) =>
      buyMuseumTicket(ticketType, quantity),
  });
  return { buyTicket, isError, isSuccess };
}

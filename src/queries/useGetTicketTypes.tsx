import { useQuery } from "@tanstack/react-query";
import { ITicketType } from "@/models/tickets";
import { read } from "@/services/api";

export async function getTicketTypes() {
  return await read<ITicketType[]>("tickets/all");
}

export function useGetTicketTypes() {
  const {
    data: ticketTypes = [],
    isLoading: isLoadingTickets,
    isError: isErrorLoadingTickets,
  } = useQuery({
    queryKey: ["tickets"],
    queryFn: async () => await getTicketTypes(),
  });
  return { ticketTypes, isLoadingTickets, isErrorLoadingTickets };
}

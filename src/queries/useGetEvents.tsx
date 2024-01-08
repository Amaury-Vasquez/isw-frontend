import { useQuery } from "@tanstack/react-query";
import { read } from "@/services/api";
import { IEvent } from "@/models/events";

export async function getEvents() {
  return await read<IEvent[]>("events/all");
}

export function useGetEvents() {
  const { data: events = [], isLoading } = useQuery<IEvent[]>({
    queryKey: ["events"],
    queryFn: getEvents,
  });
  return { events, isLoading };
}

import { useQuery } from "@tanstack/react-query";
import { IExhibit } from "@/models/exhibits";
import { read } from "@/services/api";

export async function getExhibits() {
  return await read<IExhibit[]>("rooms/all");
}

export function useGetExhibits() {
  const { data: exhibits = [], isLoading } = useQuery<IExhibit[]>({
    queryKey: ["exhibits"],
    queryFn: getExhibits,
  });
  return { exhibits, isLoading };
}

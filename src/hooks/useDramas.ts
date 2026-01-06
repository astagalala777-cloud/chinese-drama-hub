import { useQuery } from "@tanstack/react-query";
import { fetchDramas, fetchEpisodes, searchDramas, Category } from "@/lib/api";

export const useDramas = (category: Category) => {
  return useQuery({
    queryKey: ["dramas", category],
    queryFn: () => fetchDramas(category),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useEpisodes = (bookId: string) => {
  return useQuery({
    queryKey: ["episodes", bookId],
    queryFn: () => fetchEpisodes(bookId),
    enabled: !!bookId,
  });
};

export const useSearchDramas = (query: string) => {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => searchDramas(query),
    enabled: query.length >= 2,
    staleTime: 2 * 60 * 1000,
  });
};

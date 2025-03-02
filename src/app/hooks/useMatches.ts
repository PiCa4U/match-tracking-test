"use client"

import { useQuery } from "@tanstack/react-query";
import { fetchMatches } from "../services/api";

export const useMatches = () => {
  return useQuery({
    queryKey: ["matches"],
    queryFn: fetchMatches,
    refetchInterval: 60000,
    retry: 2,
  });
};

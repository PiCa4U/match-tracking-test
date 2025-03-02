"use client";

import { useState } from "react";
import { Header } from "@/app/components/header";
import { MatchesList } from "@/app/components/matchesList";
import { useMatches } from "@/app/hooks/useMatches";
import React from "react";

export const Matches = () => {
  const { data: matches, error, isLoading } = useMatches();
  const [selectedStatus, setSelectedStatus] = useState("Все статусы");

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <>
      <Header selectedStatus={selectedStatus} onStatusChange={setSelectedStatus} />
      <MatchesList matches={matches} selectedStatus={selectedStatus} />
    </>
  );
};

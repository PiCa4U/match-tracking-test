"use client";

import React from "react";
import { MatchCard } from "../matchCard";
import styles from "./styles.module.css";
import type { Match } from "@/app/shared/types";

type ListProps = {
    matches: Match[];
    selectedStatus: string;
};

const statusMap: Record<string, string> = {
    "Все статусы": "all",
    Live: "Ongoing",
    Finished: "Finished",
    "Match preparing": "Scheduled",
};

export const MatchesList = ({ matches, selectedStatus }: ListProps) => {
    const mappedStatus = statusMap[selectedStatus] || "all";

    const filteredMatches = matches?.filter((match) =>
        mappedStatus === "all" ? true : match.status === mappedStatus
    );

    return (
        <div>
            <div className={styles.listContainer}>
                {filteredMatches.length > 0 ? (
                    filteredMatches.map((match) => <MatchCard key={match.title} match={match} />)
                ) : (
                    <p>Нет матчей с таким статусом</p>
                )}
            </div>
        </div>
    );
};

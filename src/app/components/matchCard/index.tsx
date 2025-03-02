import React from "react";
import styles from "./styles.module.css";
import {ChevronUpIcon, TeamIcon} from "../../../../public/icons";
import type {Match} from "@/app/shared/types";

interface MatchProps {
  match: Match
}

export const MatchCard: React.FC<MatchProps> = ({
  match,
}) => {
  let statusText = "";
  let statusClass = "";

  if (match.status === "Finished") {
    statusText = "Finished";
    statusClass = styles.finished;
  } else if (match.status === "Ongoing") {
    statusText = "Live";
    statusClass = styles.ongoing;
  } else if (match.status === "Scheduled") {
    statusText = "Match preparing";
    statusClass = styles.scheduled;
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerPreview}>
        <div className={styles.teamName}>
          <TeamIcon/>
          {match.homeTeam.name}
        </div>
        <div className={styles.matchScore}>
          <div>{match.homeScore} : {match.awayScore}</div>
          <div className={`${styles.status} ${statusClass}`}>{statusText}</div>
        </div>
        <div className={styles.teamName}>
          {match.awayTeam.name}
          <TeamIcon/>
          <ChevronUpIcon/>
        </div>
      </div>
      <div className={styles.matchDetails}>
        <div className={styles.teamDetails}>
          <div className={styles.playersList}>
            {match.homeTeam.players.map(player =>
                <div className={styles.teamInfo}>
                  <div className={styles.userName}>
                    {player.username}
                  </div>
                  <div className={styles.infoCard}>
                    <div className={styles.placeholder}>Убийств: </div>
                    <div className={styles.teamInfoData}>{player.kills}</div>
                  </div>
                </div>
            )}
          </div>
          <div className={styles.teamInfo}>
            <div className={styles.infoCard}>
              <div className={styles.placeholder}>Points: </div>
              <div className={styles.teamInfoData}>+{match.homeTeam.points}</div>
            </div>
            <div className={styles.divider}/>
            <div className={styles.infoCard}>
              <div className={styles.placeholder}>Место: </div>
              <div className={styles.teamInfoData}>{match.homeTeam.place}</div>
            </div>
            <div className={styles.divider}/>
            <div className={styles.infoCard}>
              <div className={styles.placeholder}>Всего убийств: </div>
              <div className={styles.teamInfoData}>{match.homeTeam.total_kills}</div>
            </div>
          </div>
        </div>
        <div className={styles.teamDetails}>
          <div className={styles.playersList}>
            {match.awayTeam.players.map(player =>
              <div className={styles.teamInfo}>
                <div className={styles.userName}>
                  {player.username}
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.placeholder}>Убийств: </div>
                  <div className={styles.teamInfoData}>{player.kills}</div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.teamInfo}>
            <div className={styles.infoCard}>
              <div className={styles.placeholder}>Points: </div>
              <div className={styles.teamInfoData}>+{match.awayTeam.points}</div>
            </div>
            <div className={styles.divider}/>
            <div className={styles.infoCard}>
              <div className={styles.placeholder}>Место: </div>
              <div className={styles.teamInfoData}>{match.awayTeam.place}</div>
            </div>
            <div className={styles.divider}/>
            <div className={styles.infoCard}>
              <div className={styles.placeholder}>Всего убийств: </div>
              <div className={styles.teamInfoData}>{match.awayTeam.total_kills}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

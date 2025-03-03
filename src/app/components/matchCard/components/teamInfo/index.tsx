import styles from "./styles.module.css";
import Image from "next/image";
import React, {FC} from "react";
import type {Match} from "@/app/shared/types";
import {Avatar} from "../../../../shared/assets/images";

type TeamInfoProps = {
  match: Match
  team: "awayTeam" | "homeTeam";
}

export const TeamInfo:FC<TeamInfoProps> = ({team, match} ) => {

  return (
    <div className={styles.teamDetails}>
      <div className={styles.playersList}>
        {match[team].players.map(player =>
          <div key={player.username} className={styles.teamInfo}>
            <div className={styles.userName}>
              <Image className={styles.avatar} src={Avatar} alt="Avatar" />
              {player.username}
            </div>
            <div className={styles.infoCard}>
              <div className={styles.placeholder}>Убийств:</div>
              <div className={styles.teamInfoData}>{player.kills}</div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.teamStats}>
        <div className={styles.infoCard}>
          <div className={styles.placeholder}>Points:</div>
          <div className={styles.teamInfoData}>+{match[team].points}</div>
        </div>
        <div className={styles.divider}/>
        <div className={styles.infoCard}>
          <div className={styles.placeholder}>Место:</div>
          <div className={styles.teamInfoData}>{match[team].place}</div>
        </div>
        <div className={styles.divider}/>
        <div className={styles.infoCard}>
          <div className={styles.placeholder}>Всего убийств:</div>
          <div className={styles.teamInfoData}>{match[team].total_kills}</div>
        </div>
      </div>
    </div>
  )
}

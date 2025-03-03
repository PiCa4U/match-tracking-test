import React, {useMemo, useState} from "react";
import styles from "./styles.module.css";
import { ChevronUpIcon, TeamIcon } from "../../shared/assets/icons";
import type { Match } from "@/app/shared/types";
import { TeamInfo } from "@/app/components/matchCard/components/teamInfo";

interface MatchProps {
  match: Match;
}

export const MatchCard: React.FC<MatchProps> = ({ match }) => {
  const [isOpen, setIsOpen] = useState(false);

    const { statusClass, statusText} = useMemo(()=>{
        let statusText = "";
        let statusClass = "";

        if (match.status === "Finished") {
            statusText = "Finished";
            statusClass = styles.finished;
        }

        if (match.status === "Ongoing") {
            statusText = "Live";
            statusClass = styles.ongoing;
        }

        if (match.status === "Scheduled") {
            statusText = "Match preparing";
            statusClass = styles.scheduled;
        }


        return { statusText, statusClass };
    },[match]);

  const handleOpen = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerPreview}>
        <div className={styles.teamName}>
          <TeamIcon className={styles.teamIcon}/>
          {match.homeTeam.name}
        </div>
        <div className={styles.matchScore}>
          <div>{match.homeScore} : {match.awayScore}</div>
          <div className={`${styles.status} ${statusClass}`}>{statusText}</div>
        </div>
        <div className={styles.teamName}>
          {match.awayTeam.name}
          <TeamIcon className={styles.teamIcon}/>
          <div
            className={`${styles.chevronIcon} ${isOpen ? styles.rotated : ""}`}
            onClick={handleOpen}
          >
            <ChevronUpIcon />
          </div>
        </div>
      </div>

        {isOpen && (
          <div className={styles.matchDetails}>
            <TeamInfo match={match} team="homeTeam" />
            <TeamInfo match={match} team="awayTeam" />
          </div>
        )}
      </div>
  );
};

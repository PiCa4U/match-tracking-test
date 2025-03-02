export interface Player {
    username: string;
    kills: number;
}

export interface Team {
    name: string;
    place: number;
    players: Player[];
    points: number;
    total_kills: number;
}

export type MatchStatus = "Finished" | "Ongoing" | "Scheduled";

export interface Match {
    title: string;
    time: string
    status: MatchStatus;
    homeScore: number;
    awayScore: number;
    homeTeam: Team;
    awayTeam: Team;
}

export interface MatchesData {
  matches: Match[];
}

export interface ApiResponse {
    data: MatchesData;
    ok: boolean;
}

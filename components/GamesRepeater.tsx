import { FC } from 'react';
import Game from './Game';

interface GamesRepeaterProps {
  games: Array<object>;
}

const GamesRepeater: FC<GamesRepeaterProps> = ({ games }) => {
  return (
    <>
      {
        games
          .map(game =>
            <>
              <Game
                commence_time={game["commence_time"]}
                away_team={game["away_team"]}
                away_team_points={game["away_team_points"]}
                away_team_rank={game["away_team_rank"]}
                home_team={game["home_team"]}
                home_team_points={game["home_team_points"]}
                home_team_rank={game["home_team_rank"]}
              />
           </>
          )
      }
    </>
  );
};

export default GamesRepeater;
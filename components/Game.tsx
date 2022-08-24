import { FC } from 'react';
import Team from './Team';
import { DownOutlined } from '@ant-design/icons';
import { Col, Row, Divider } from 'antd';

interface GameProps {
  commence_time: string;
  away_team: string;
  away_team_points: string;
  away_team_rank: number;
  home_team: string;
  home_team_points: string;
  home_team_rank: number;
}

const Game: FC<GameProps> = ({
  commence_time,
  away_team,
  away_team_points,
  away_team_rank,
  home_team,
  home_team_points,
  home_team_rank
}) => {

  function dateAndTime(dateString) {
    var date = new Date(dateString);
    var time = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}).replace(/^(?:00:)?0?/, '');
    return date.toDateString() + ", " + time;
  }

  return (
    <>
      <Divider plain>
        {dateAndTime(commence_time)}
      </Divider>
      <Row
        gutter={16}
        className="gamerow"
      >
        <Col
          lg={11}
          md={11}
          sm={24}
          xs={24}
          style={{
            paddingLeft: "0px",
            paddingRight: "0px"
          }}
        >
          <Team
            name={away_team}
            points={away_team_points}
            rank={away_team_rank}
          />
        </Col>
        <div className="grid-item">
          <Col
            lg={2}
            md={2}
            sm={24}
            xs={24}
            style={{
              paddingLeft: "0px",
              paddingRight: "0px"
            }}
          >
            @
          </Col>
        </div>
        <Col lg={11} md={11} sm={24} xs={24}>
          <Team
            name={home_team}
            points={home_team_points}
            rank={home_team_rank}
          />
        </Col>
      </Row>
    </>
  );
};

export default Game;
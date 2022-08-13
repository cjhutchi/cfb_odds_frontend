import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { Col, Row, Layout, PageHeader, Divider } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { DownOutlined } from '@ant-design/icons';
import Team from '../components/Team'

export default function Home() {
  const [games, setGames] = useState([]);
  const [current_week, setCurrentWeek] = useState(0);

  useEffect(() => {
    handleLoad();
  }, [])

  function handleLoad() {
    axios.get('https://blooming-escarpment-27090.herokuapp.com/games/current_week')
      .then(res => {
        const response = res.data;
        setGames(response["games"]);
        setCurrentWeek(response["current_week"]);
      })
  };

  function dateAndTime(date) {
    var date = new Date(date);
    return date.toDateString() + ", " + date.toLocaleTimeString();
  }
  return (
    <Layout>
      <PageHeader
        title={"AP Top 25 Games: Week " + current_week }
      />
      <Content>
        <div className={styles.container}>
          {
            games
              .map(game =>
                <>
                  <Divider plain>
                    {dateAndTime(game["commence_time"])}
                  </Divider>
                  <Row
                    gutter={16}
                    className="gamerow"
                  >
                    <Col lg={11} md={11} sm={24} xs={24} xxs={24}>
                      <Team
                        name={game["away_team"]}
                        points={game["away_team_points"]}
                        rank={game["away_team_rank"]}
                      />
                    </Col>
                    <div className="grid-item">
                      <Col lg={2} md={2} sm={24} xs={24} xxs={24}>
                        <DownOutlined />
                      </Col>
                    </div>
                    <Col lg={11} md={11} sm={24} xs={24} xxs={24}>
                      <Team
                        name={game["home_team"]}
                        points={game["home_team_points"]}
                        rank={game["home_team_rank"]}
                      />
                    </Col>
                  </Row>
                </>
              )
          }
        </div>
      </Content>
      <Footer>

      </Footer>
    </Layout>
  )
}

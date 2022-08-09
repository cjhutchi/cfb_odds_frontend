import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { Card, Col, Row, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Team from '../components/Team'

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    handleLoad();
  }, [])

  function handleLoad() {
    axios.get('https://blooming-escarpment-27090.herokuapp.com/games')
      .then(res => {
        const games = res.data;
        setGames(games);
      })
  };

  return (
    <Layout>
      <Header>
        College Football Games: Week X
      </Header>
      <Content>
        <div className={styles.container}>
          {
            games
              .map(game =>
                <>
                  <Row
                    gutter={16}
                    className="gamerow"
                  >
                    <Col span={11}>
                      <Team
                        name={game["away_team"]}
                        points={game["away_team_points"]}
                      />
                    </Col>
                    @
                    <Col span={11}>
                      <Team
                        name={game["home_team"]}
                        points={game["home_team_points"]}
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

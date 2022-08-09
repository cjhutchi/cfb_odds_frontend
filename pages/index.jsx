import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { Col, Row, Layout, PageHeader } from 'antd';
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
    axios.get('https://blooming-escarpment-27090.herokuapp.com/games')
      .then(res => {
        const response = res.data;
        console.log(response)
        setGames(response["games"]);
        setCurrentWeek(response["current_week"]);
      })
  };

  return (
    <Layout>
      <PageHeader
        title={"Week " + current_week }
      />
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
                    <DownOutlined
                      className="versus"
                    />
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
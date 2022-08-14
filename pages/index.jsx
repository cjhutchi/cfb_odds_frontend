import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, Link} from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { Col, Row, Layout, PageHeader, Divider } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { DownOutlined } from '@ant-design/icons';
import Team from '../components/Team'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
    var time = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}).replace(/^(?:00:)?0?/, '');
    return date.toDateString() + ", " + time;
  }
  return (
    <html>
      <Head key="header">
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={content.acf.excerpt} />
        <meta charSet="utf-8" />

        <GeneralHead
          description="View the spreads for the current week"
          ogUrl={currentURL}
          ogImage="https://static4.depositphotos.com/1016418/369/i/600/depositphotos_3693729-stock-photo-closeup-of-american-football-on.jpg"
          ogTitle="AP Top 25 Spreads"
        />
      </Head>
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
        <Footer
          style={{
            textAlign: 'center',
            background: 'black',
            color: 'white'
          }}
        >
          <div className="socials">
            <a href="https://github.com/cjhutchi" targe="_blank" className="social-link">
              <FontAwesomeIcon icon={faGithub} className="fa-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/chutchinson252/" targe="_blank" className="social-link">
              <FontAwesomeIcon icon={faLinkedin} className="fa-2xl" />
            </a>
          </div>

          Created by Chris Hutchinson, ⓒ {new Date().getFullYear()}
        </Footer>
      </Layout>
    </html>
  )
}

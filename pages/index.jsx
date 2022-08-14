import { useEffect, useState } from 'react'
import axios from 'axios';
import { Layout, PageHeader } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextSeo } from 'next-seo';
import GamesRepeater from '../components/GamesRepeater'


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

  return (
    <>
      <NextSeo
        title="College Football Spreads"
        description="Get the spreads for this week's college football games"
        canonical="https://cfboddsfrontend.herokuapp.com/"
        openGraph={{
          url: 'https://cfboddsfrontend.herokuapp.com/',
          title: 'College Football Spreads',
          description: 'Get the spreads for this week\'s college football games',
          images: [
            {
              url: 'https://static4.depositphotos.com/1016418/369/i/600/depositphotos_3693729-stock-photo-closeup-of-american-football-on.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            }
          ],
          site_name: 'CFBSpreads',
        }}
      />
      <Layout>
        <PageHeader
          title={"AP Top 25 Games: Week " + current_week }
        />

        <Content
          style={{
            paddingBottom: "50px"
          }}
        >
          <GamesRepeater
            games={games}
          />
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
    </>
  )
}

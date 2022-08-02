import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios';

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
    <div className={styles.container}>
      {
        games
          .map(game =>
            <li key={Math.random()}>{game["away_team"]} @ {game["home_team"]}</li>
          )
      }
    </div>
  )
}

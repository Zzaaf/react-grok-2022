import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import style from './Home.module.css'

function Home() {

  const [themes, setThemes] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_URL)
      .then(response => response.json())
      .then(data => setThemes(data))
  }, [])

  return (
    <ul className={style.list}>
      {themes.map((theme, index) => <Link to={theme.split('_')[0].toLowerCase()} key={index}><li className={style.card}>{theme}</li></Link>)}
    </ul>
  );
}

export default Home;
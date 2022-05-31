import React, { useEffect, useState } from 'react';
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
      {themes.map(theme => <li className={style.card}>{theme}</li>)}
    </ul>
  );
}

export default Home;
import React, { useState } from 'react';
import style from './Puzzle110.module.css'

function Puzzle110() {

  const [css, setCss] = useState(false)

  return (
    <div className={`circle ${css ? style.active : style.unactive}`} onClick={() => setCss(prevState => !prevState)}>

    </div>
  );
}

export default Puzzle110;
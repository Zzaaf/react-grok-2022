import React, { useState } from 'react';
import './Puzzle110.css'

function Puzzle110() {

  const [css, setCss] = useState(false)

  return (
    <div className={css ? 'circle circle-active' : 'circle circle-unactive'} onClick={() => setCss(prevState => !prevState)}>
    </div>
  );
}

export default Puzzle110;
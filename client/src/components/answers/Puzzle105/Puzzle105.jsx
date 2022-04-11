import React, { useState } from 'react';
import './Puzzle105.css'

function Puzzle105() {

  const [style, setStyle] = useState(false)

  return (
    <>
      <div className={style ? 'box box-active' : 'box box-unactive'}></div>
      <button className='btn' onClick={() => setStyle(true)}>Change color</button>
    </>
  );
}

export default Puzzle105;
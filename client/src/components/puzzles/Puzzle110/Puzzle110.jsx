import React, { useState } from 'react';
import './Puzzle110.css'

// Напиши функциональный компонент Puzzle110, который возвращает круг в виде элемента <div> с css-классом `.circle`, размером 10rem по высоте и ширине, так же он серого цвета (yellow, узнай его rgb код)
// При клике на круг, его цвет меняется с жёлтого на зелёный (green, узнай его rgb код) при последующем клике цвета меняются в виде toggle-эффекта

function Puzzle110() {

  const [css, setCss] = useState(false)

  return (
    <div className={css ? 'circle circle-active' : 'circle circle-unactive'} onClick={() => setCss(prevState => !prevState)}>
    </div>
  );
}

export default Puzzle110;
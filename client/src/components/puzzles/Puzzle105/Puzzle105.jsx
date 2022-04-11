import React, { useState } from 'react';
import './Puzzle105.css'

// Напиши функциональный компонент Puzzle105, который возвращает элемент <div> с css-классом `.box`, размером 5rem по высоте и ширине, так же он серого цвета (gray, узнай его rgb код)
// Ещё должна быть кнопка с текстом 'Change color' и css-классом 'btn', при нажатии которой серый цвет <div> элемента навсегда меняется на красный (red, узнай его rgb код)

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
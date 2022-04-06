import React, { useState } from 'react';
import './Puzzle105.css'

// Напиши функциональный компонент Puzzle105, который возвращает элемент <div>, размером 5rem по высоте и ширине, так же он серого цвета (gray)
// Ещё должна быть кнопка с текстом 'Change color' и css-классом 'btn', при нажатии которой серый цвет <div> элемента меняется на красный (red)

function Puzzle105() {

  const [style, setStyle] = useState(false)

  console.log(style);

  return (
    <>
      <div className={style ? 'box active' : 'box unactive'}></div>
      <button onClick={() => setStyle(prevState => !prevState)}>Change color</button>
    </>
  );
}

export default Puzzle105;
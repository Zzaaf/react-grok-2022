import React, { useState } from 'react';
import Card from './Card';

// Установи npm-пакет bootstrap (не путать с CDN), и воспользуйся уже готовыми решениями этой css-библиотеки.
// В качестве готового решения нужно найти "Card" и воспользоваться bootstrap вёрсткой, на основе которой создать компонент <Card>
// В компонент <Card> нужно пробросить данные из компонента <Puzzle120> через props, чтобы в карточке можно было использовать: "Name", "Date of Birth" и кнопку "Hide card"
// При нажатии кнопки "Hide card", карточка удаляется из DOM-дерева.
// Так же компонент <Puzzle120> имеет bootstrap css-класс 'container'

function Puzzle120() {

  const [visible, setVisible] = useState(true)

  const info = {
    name: 'Linus Torvalds',
    dateBirth: '28.12.1969'
  }

  return (
    <>
      {visible && <Card info={info} setVisible={setVisible} />}
    </>
  );
}

export default Puzzle120;
import React, { useReducer } from "react";
import Card from "./Card";

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_CARD': return {
      ...state,
      card: state.card === 2 ? 0 : state.card + 1,
    };

    case 'NEXT_BACKGROUND': return {
      ...state,
      background: state.background === 'bg-primary' ? 'bg-secondary' :
        state.background === 'bg-secondary' ? 'bg-success' :
          'bg-primary'
    };
  }
};

const initialState = {
  card: 0,
  background: 'bg-primary'
};

function UseReducer01_Cards() {
  const [
    { card, background },
    dispatch
  ] = useReducer(reducer, initialState);

  const nextCard = React.useCallback(() => dispatch({ type: 'NEXT_CARD' }));
  const nextBackground = React.useCallback(() => dispatch({ type: 'NEXT_BACKGROUND' }));

  return <div>
    {card === 0 &&
<Card backgroundClass={background} info={{ name: 'ok', dateBirth: 'my' }} />}
    {card === 1 &&
<Card backgroundClass={background} info={{ name: 'JIJ', dateBirth: 'my' }} />}
    {card === 2 &&
<Card backgroundClass={background} info={{ name: 'KOH', dateBirth: 'my' }} />}
    <br />
    <div>
      <button type="button" className="btn btn-primary" onClick={nextCard}>
        Next card
      </button>
      &nbsp;&nbsp;
      <button type="button" className="btn btn-primary" onClick={nextBackground}>
        Next background
      </button>
    </div>
  </div>;
}

export default UseReducer01_Cards;

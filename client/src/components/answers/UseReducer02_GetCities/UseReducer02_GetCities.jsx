import React, { useEffect, useReducer } from 'react';
import Row from './Row';

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_CITIES': return {
      ...state,
      cities: action.payload,
    };

    default:
      throw new Error('unexpected action type');
  }
};

const initialState = {
  cities: []
};

function UseReducer02_GetCities() {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/cities`)
      .then(response => response.json())
      .then(data => dispatch({ type: 'GET_CITIES', payload: data }))
  }, [])

  return (
    <table className="table table-striped" >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Founded</th>
          <th scope="col">Area</th>
          <th scope="col">Official Language</th>
          <th scope="col">Population</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        {state.cities.length ? state.cities.map(city => <Row key={city.id} city={city} />) :
          <tr>
            <th scope="col">No data</th>
          </tr>
        }
      </tbody>
    </table >
  );
}

export default UseReducer02_GetCities;
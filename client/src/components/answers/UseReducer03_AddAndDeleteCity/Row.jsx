import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

function Row({ city, state, dispatch }) {

  state

  // const deleteCity = () => {
  //   fetch(`${process.env.REACT_APP_URL}/cities/${city.id}`, {
  //     method: 'DELETE',
  //     headers: { 'Content-Type': 'Application/json' }
  //   })
  //     .then(res => res.json())
  //     .then(payload => dispatch({ type: 'DELETE_CITY', payload }))
  // }

  const btnHandler = () => {
    dispatch({ type: 'SHOW_MODAL' })
    // if (state.modal) {
    //   deleteCity()
    // } else {
    //   dispatch({ type: 'HIDE_MODAL' })
    // }
  }

  return (
    <tr>
      <th scope="row">{city.id}</th>
      <td>{city.title}</td>
      <td>{city.founded}</td>
      <td>{city.area}</td>
      <td>{city.officialLanguage}</td>
      <td>{city.population}</td>
      <td>{city.description}</td>
      <td><i className="bi bi-x-lg" role="button" onClick={btnHandler}></i></td>
    </tr >
  );
}

export default Row;
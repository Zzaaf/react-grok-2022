import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({ info, backgroundClass }) {
  return (
    <div className={`card ${backgroundClass}`} style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Name: {info.name}</h5>
        <p className="card-text">Date of Birth: {info.dateBirth}</p>
      </div>
    </div>
  );
}

export default Card;
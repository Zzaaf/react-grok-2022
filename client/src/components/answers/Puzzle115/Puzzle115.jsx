import React, { useState } from 'react';

function Puzzle115() {

  const [value, setValue] = useState(12)

  return (
    <>
      <input className='range' onChange={({ target }) => setValue(target.value)} type="range" name="months" min="0" max="120" defaultValue={value} step="12" />
      <label className='label' htmlFor="months">Months: {value}</label>
    </>
  );
}

export default Puzzle115;
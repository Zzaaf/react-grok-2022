import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Puzzle100 from "../Puzzle100/Puzzle100";
import Puzzle105 from "../Puzzle105/Puzzle105";
import Puzzle110 from "../Puzzle110/Puzzle110";
import Puzzle115 from "../Puzzle115/Puzzle115";
import Puzzle120 from "../Puzzle120/Puzzle120";
import Puzzle125 from "../Puzzle125/Puzzle125";
import Puzzle130 from "../Puzzle130/Puzzle130";
import Puzzle135 from "../Puzzle135/Puzzle135";
import Puzzle140 from "../Puzzle140/Puzzle140";
import Puzzle145 from "../Puzzle145/Puzzle145";
import Puzzle150 from "../Puzzle150/Puzzle150";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/puzzle100" element={<Puzzle100 />} />
        <Route path="/puzzle105" element={<Puzzle105 />} />
        <Route path="/puzzle110" element={<Puzzle110 />} />
        <Route path="/puzzle115" element={<Puzzle115 />} />
        <Route path="/puzzle120" element={<Puzzle120 />} />
        <Route path="/puzzle125" element={<Puzzle125 />} />
        <Route path="/puzzle130" element={<Puzzle130 />} />
        <Route path="/puzzle135" element={<Puzzle135 />} />
        <Route path="/puzzle140" element={<Puzzle140 />} />
        <Route path="/puzzle145" element={<Puzzle145 />} />
        <Route path="/puzzle150" element={<Puzzle150 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

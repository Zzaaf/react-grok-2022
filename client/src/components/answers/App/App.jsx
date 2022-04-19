import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basic01_H1 from '../Basic01_H1/Basic01_H1'
import UseState01_ChangeColor from '../UseState01_ChangeColor/UseState01_ChangeColor'
import UseState02_Toggle from '../UseState02_Toggle/UseState02_Toggle'
import UseState03_Slider from '../UseState03_Slider/UseState03_Slider'
import UseState04_Props from '../UseState04_Props/UseState04_Props'
import UseState05_Modal from '../UseState05_Modal/UseState05_Modal'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/basic01" element={<Basic01_H1 />} />
        <Route path="/useState01" element={<UseState01_ChangeColor />} />
        <Route path="/useState02" element={<UseState02_Toggle />} />
        <Route path="/useState03" element={<UseState03_Slider />} />
        <Route path="/useState04" element={<UseState04_Props />} />
        <Route path="/useState05" element={<UseState05_Modal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

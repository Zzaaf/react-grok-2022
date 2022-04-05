import { BrowserRouter, Routes, Route } from "react-router-dom";
import Puzzle100 from "../Puzzle100/Puzzle100";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/puzzle100" element={<Puzzle100 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

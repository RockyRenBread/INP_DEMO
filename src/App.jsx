import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpinBad from "./pages/render/spin-bad";
import SpinGood from "./pages/render/spin-good";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/render/spin-bad" element={<SpinBad />} />
        <Route path="/render/spin-good" element={<SpinGood />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

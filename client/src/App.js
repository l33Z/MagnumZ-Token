import "./App.css";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Buynow from "./Components/Buynow";
import Contactus from "./Components/Contactus";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/buynow" element={<Buynow />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

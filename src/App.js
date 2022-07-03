import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Intro from "./component/Intro";
import EnterTime from './component/EnterTime'
import EnterNameA from "./component/EnterNameA";
import EnterNameB from "./component/EnterNameB";
import Scoreboard from './component/Scoreboard'
import PageNotFound from "./component/PageNotFound";
import ban1 from "./pic1.png"
import ban2 from "./pic2.png"
import ban3 from "./pic3.png"
import ban4 from "./pic4.png"
import ban5 from "./pic5.png"
import ban6 from "./pic 6.png"

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="banner">
            <img src={ban5} alt="chinese" />
            <img src={ban2} alt="bina-harapan" />
            <img src={ban6} alt="circle" />
            <p>Vivian Wong Open Basketball Friendship Competition</p>
            <img src={ban4} alt="red" />
            <img src={ban3} alt="harimau" />
            <img src={ban1} alt="vivian" />
        </div>
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route path="/enter-time" element={<EnterTime />} />
          <Route path="/enter-name-A" element={<EnterNameA />} />
          <Route path="/enter-name-B" element={<EnterNameB />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </div>
      <div className="alert-portrait">
        <div className="overlay">
          <div className="iconContainer">
            <div className="phone">
              <i className="fa fa-sync-alt" aria-hidden="true" ></i>
            </div>
          </div>
        </div>
        <p>Rotate your phone</p>
      </div>
    </HashRouter>
  );
}

export default App;

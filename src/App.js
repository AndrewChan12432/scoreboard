import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Intro from "./component/Intro";
import EnterTime from './component/EnterTime'
import EnterNameA from "./component/EnterNameA";
import EnterNameB from "./component/EnterNameB";
import Scoreboard from './component/Scoreboard'
import PageNotFound from "./component/PageNotFound";
import background from "./background.png";

function App() {
  return (
    <HashRouter>
      <div className="App" style={{
        background: `rgba(0, 0, 0, 0.4) url(${background})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100v',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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
            <i className="fa fa-sync-alt" aria-hidden="true" >
            </i>
          </div>
        </div>
      </div>
      <p>Rotate your phone</p>
      </div>
    </HashRouter>
  );
}

export default App;

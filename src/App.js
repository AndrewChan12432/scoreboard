import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Intro from "./component/Intro";
import EnterTime from './component/EnterTime'
import EnterNameA from "./component/EnterNameA";
import EnterNameB from "./component/EnterNameB";
import Scoreboard from './component/Scoreboard'
import PageNotFound from "./component/PageNotFound";
import background from "./background.png";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App" style={{
        background: `rgba(0, 0, 0, 0.2) url(${background})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100v',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/enter-time" component={EnterTime} />
        <Route path="/enter-name-A" component={EnterNameA} />
        <Route path="/enter-name-B" component={EnterNameB} />
        <Route path="/scoreboard" component={Scoreboard} />
        <Route component={PageNotFound} />
        </Switch>
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

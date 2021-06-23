import "./style.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import One from './comp/one'
import Two from './comp/two'
import Three from './comp/three'
import Four from './comp/four'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div class="header-list">
            <div class="header-inner">
              <Link to="/">fs</Link>
            </div>
          </div>
        </header>
        <Switch>
          <Route exact path="/">
            <One />
          </Route>
          <Route path="/two">
            <Two />
          </Route>
          <Route path="/three">
            <Three />
          </Route>
          <Route path="/four">
            <Four />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

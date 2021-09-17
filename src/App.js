import { useState } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import HomePage from "./routes/Home";
import GamePage from "./routes/Game"

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route path="/game" component={GamePage}/>
        <Route path="/about" />
        <Route path="/about" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
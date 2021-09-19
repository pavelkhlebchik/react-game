import { useRouteMatch, Switch, Route } from "react-router-dom";
import classNames from "classnames";

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/NotFound";

import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import s from "./style.module.css";

import './App.css';

const App = () => {
  const match = useRouteMatch('/');
  return (
    <Switch>
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={classNames(s.wrap, {
            [s.isHomePage]: match.isExact
          })}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
      <Route path="/404" component={NotFoundPage} />
    </Switch>
  )
}

export default App;
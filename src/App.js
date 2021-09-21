import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import classNames from "classnames";

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/NotFound";

import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import { FireBaseContext } from "./context/firebaseContext";
import FireBase from "./service/firebase";

import s from "./style.module.css"
import './App.css';

const App = () => {
  const match = useRouteMatch('/');
  return (
    <FireBaseContext.Provider value={new FireBase()}>
    <Switch>
      <Route path="/404" render={() => (
        <NotFoundPage />
      )} />
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
              <Route render={() => (
                <Redirect to="/404"/>
              )} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>
    </FireBaseContext.Provider>
  )
}

export default App;
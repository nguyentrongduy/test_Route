import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter,
  Switch
} from "react-router-dom";

import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" name="Login Page" component={Home} />
          <Route path="/About" name="Register Page" component={About} />
        </Switch>
      </HashRouter>
    );
  }
}

const Home = () => {
  return (
    <div>
      <ListLink />Home
    </div>
  );
};

const About = () => {
  return (
    <div>
      <ListLink />About
    </div>
  );
};

const ListLink = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

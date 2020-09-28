import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./style.css";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  static getDerivedStateFromProps(props, state) {
    return { active: props.active };
  }

  render() {
    return (
      <BrowserRouter>
        <Link to="/Login">Login</Link>
        <br />
        <Link to="/Dashboard">Dashboard</Link>

        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/Dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
class Login extends React.Component {
  render() {
    return <div>Welcome to login</div>;
  }
}
class Dashboard extends React.Component {
  render() {
    return <div>Welcome to Dashboard</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

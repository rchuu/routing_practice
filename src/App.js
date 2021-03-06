import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Hello from "./components/Hello";

function App() {
  return (
    <BrowserRouter>
      <h1>Routing</h1>
      <p>
        <Link to="/">Welcome</Link>
        {' | '}
        <Link to="/hello/1">Hello1</Link>
        {' | '}
        <Link to="/hello/2">Hello2</Link>
        {' | '}
        <Link to="/hello/3">Hello3</Link>
        {' | '}
        <Link to="/hello/4">Hello4</Link>
        {' | '}
        <Link to="/hello/blue/red">Hello Blue Red</Link>
      </p>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Hello/:num/:text/:bg">
          <Hello />
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

export default App;
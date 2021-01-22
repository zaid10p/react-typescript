import React from "react";
import { Counter } from "./components/Counter";
import "./App.css";
import { Todos } from "./components/Todos";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Home } from "./components/Home";


function App() {
  return (
    <div>
      <Router>
        <div className="App-header">
          <h3>React Typescript</h3>
          <Link to="/">Home </Link> <Link to="/counter"> Counter </Link>
          <Link to="/todos"> Todos(protected route) </Link>
        </div>
       
        <hr />
        <div className="mt">
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          {/* <Route exact path="/todos" component={Todos} /> */}
          <ProtectedRoute path="/todos" Component={Todos} />
        </div>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { Home } from './components/Home';
import { Todos } from './components/Todos';
import { Counter } from './components/Counter';
import { Login } from './components/Login';

function App() {
  return (
    <div>
      <Router>
        <div className="App-header">
          <h3>React Typescript</h3>
          <Link to="/">Home </Link> <Link to="/login">Login</Link>
          <Link to="/counter"> Counter </Link>
          <Link to="/todos"> Todos(protected route) </Link>
        </div>

        <hr />
        <div className="mt">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/counter" component={Counter} />
          {/* <Route exact path="/todos" component={Todos} /> */}
          <ProtectedRoute path="/todos" Component={Todos} />
        </div>
      </Router>
    </div>
  );
}

export default App;

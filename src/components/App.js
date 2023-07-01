import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import LocationDisplay from './LocationDisplay';

function Home() {
  return <h1>You are home.</h1>;
}

function About() {
  return <h1>You are on the about page.</h1>;
}
function NotFound() {
  return <h2>Not Found</h2>;
}
function App() {
  return (
    <div id='main'>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='*'>{<NotFound />}</Route>
        </Switch>
        <LocationDisplay />
      </Router>
    </div>
  );
}

export default App;

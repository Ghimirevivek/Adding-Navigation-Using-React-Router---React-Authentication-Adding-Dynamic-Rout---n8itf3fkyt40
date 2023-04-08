import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import '../styles/App.css'

function Home() {
  return <h1>You are home.</h1>
}

function About() {
  return <h1>You are on the about page.</h1>
}

function App() {
  return (
    <div id="main">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

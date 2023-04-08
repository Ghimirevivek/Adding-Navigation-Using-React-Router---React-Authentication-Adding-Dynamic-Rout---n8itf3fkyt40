import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'
import '../styles/App.css'

function Home() {
  return <h1>You are home.</h1>
}

function About() {
  return <h1>You are on the about page.</h1>
}
function LocationDisplay() {
  const location = useLocation()

  return (
    <div>
      <h2>
        No match for <code>{location.pathname}</code>
      </h2>
    </div>
  )
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
          <Route>
            <LocationDisplay />
          </Route>
          <Route path="*">{<h2>NotFound</h2>}</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

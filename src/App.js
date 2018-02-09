import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import MyRoutes from './config/routes.js';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header-fullwidth">
          <div>
            <h2 id="header"><span className="moto">What if life was..</span>
              <img id="header-logo" alt="Love.ly" src={require('./images/heart-flame.jpeg')}/>
              // Add carousel for all images?
              <strong>Love.ly</strong>
            </h2>
          </div>

        </header>
        { MyRoutes }
        <footer>
          <h1 id="footer"><span className="moto">This could be it..</span>
            <Link className="footer-nav" to={`/profiles`}>
              <span role="img" aria-label="home-emoji">🏠</span>Home
            </Link>
            {/* <Link className="footer-nav" to={`/`}>❤️Sign Up</Link> */}
          </h1>
        </footer>
      </div>
   )
  }
}

export default App;

import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={ logo } alt="AirCnC" />

      <div className="content">
        <p>Offers <strong>spots</strong> for programmers and find <strong>talents</strong> for your business.</p>

        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input id="email" type="email" placeholder="Your best email"/>

          <button className="btn" type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
}

export default App;

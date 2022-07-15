import React from "react";
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li><Link to="/a">Components A</Link></li>
          <li><Link to="/b">Components A</Link></li>

        </ul>
      </header>
    </div>
  );
}

export default App;

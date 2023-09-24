import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import MyRecipe from './components/MyRecipe';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/MyRecipe">My Recipe</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/MyRecipe" component={MyRecipe} />
      <Route path="/AboutUs" component={AboutUs} />
    </Router>
  );
}

export default App;

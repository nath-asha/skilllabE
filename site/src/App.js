import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import MyRecipe from './MyRecipe';
import AboutUs from './AboutUs';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/myrecipe">My Recipe</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/myrecipe" component={MyRecipe} />
      <Route path="/aboutus" component={AboutUs} />
    </Router>
  );
}

export default App;

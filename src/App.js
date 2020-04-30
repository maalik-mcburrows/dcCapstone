import React from 'react';
import Map from './components/Map';
import CovidData from './components/CovidData';
import './App.css';
import VerticalMenu from './components/VerticalMenu';
import Menu from './components/Menu';
import News from './components/News';
import Case from './components/Case';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Exercise from './components/exercise';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <main>
          <div className="ui menu">
          <Link to={"/"} className="header item">
            Home
          </Link>
          <a href="https://www.google.com" className="item">
            News
          </a>
          <Link to={"/case"} className="item">
            Report a Case
          </Link>
          <Link to={"/exercises"} className="item">
            Things To Do
          </Link>
          <Route path="/" component={Menu} />
        </div>
            <div className="wrapper">
                <Route exact path="/" component={VerticalMenu}/>
                <Route exact path="/" component={Map} />
                <Route exact path="/" component={CovidData} />
                <>
                  <Route exact path="/" component={News} />
                </>
                <Route path="/exercises" component={Exercise} />
                <Route path="/case" component={Case}/>
            </div>
          </main>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

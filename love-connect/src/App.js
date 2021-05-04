import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home';
import Matches from './Components/Matches';
import Profile from './Components/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/"><Home/></Route>
        <Route path="/:id"><Profile/></Route>
        <Route path="/matches"><Matches/></Route>
      </Switch>
    </Router>
  );
}

export default App;

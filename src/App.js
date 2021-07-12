import './App.css';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/league/:idLeague">
          <LeagueDetails/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

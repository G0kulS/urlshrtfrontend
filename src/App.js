import logo from './logo.svg';
import './App.css';
import Frontpage from "./frontpage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './register';
import Login from './login';
import Short from './short';
import Redir from './redirect';
import Fpass from './fpass';
import Reset from './reset';
function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact="true">
            <Frontpage></Frontpage>
            </Route>
            <Route path="/register" exact="true">
            <Register></Register>
            </Route>
            <Route path="/login" exact="true">
            <Login></Login>
            </Route>
            <Route path="/d/:id" exact="true">
            <Short></Short>
            </Route>
            <Route path="/i/:shortid" exact="true">
             <Redir></Redir>
            </Route>
            <Route path="/fpass" exact="true">
            <Fpass></Fpass>
            </Route>
            <Route path="/reset/:id" exact="true">
            <Reset></Reset>
            </Route>
        </Switch>
      </Router>  
  );
}

export default App;

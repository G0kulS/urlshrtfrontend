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
            <Route path="/d/:id/:shortid" exact="true">
             <Redir></Redir>
            </Route>
        </Switch>
      </Router>  
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Users from './containers/Users'
import User from './containers/User'
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
     <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/users" component={Users}/>
          <Route path="/users/:id" component={User}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

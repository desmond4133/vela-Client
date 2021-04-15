import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Link from 'react-router-dom';


const TopNav = () => (
  <div className="nav big-light d-flex justify-content-between">
    <link className="nav-link" to="/">Home</link>
  </div>
)


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

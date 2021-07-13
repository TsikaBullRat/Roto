import { Home } from './components/Home';
import AboutUs from './components/Aboutus';
import { Programmes } from './components/Programmes';
import { Contacts } from './components/Contacts';
import { Teams } from './components/Teams';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Pieces/Header';
import './App.css';

function App() {
  return (
    <div>
          <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about" component={AboutUs} />
          <Route path="/programs" component={Programmes} />
          <Route path="/teams" component={Teams}/>
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;


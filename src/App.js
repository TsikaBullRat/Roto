import { Home } from './components/Home';
import AboutUs from './components/Aboutus';
import { Programmes } from './components/Programmes';
import { Contacts } from './components/Contacts';
import { Teams } from './components/Teams';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Pieces/Header';
import './App.css';
import React, { useState, useEffect } from 'react';
import Loader from 'react-spinners/HashLoader';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },
    []
  );

  return (
    <>
      {
        loading ? (
          <div className="text-center" style={{ marginTop: 300 }}><Loader size={300} color={"#27394a"} loading={loading} /></div>
        ) : (

          <div>
            <Router>
              <Header />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about" component={AboutUs} />
                <Route path="/programs" component={Programmes} />
                <Route path="/teams" component={Teams} />
                <Route path="/contacts" component={Contacts} />
              </Switch>
            </Router>
          </div>
        )
      }
    </>

  );
}

export default App;


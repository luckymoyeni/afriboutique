import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Checkout from '../components/Checkout/Checkout';
import { auth } from '../containers/firebase';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Userprofile from '../components/UserProfile';

import { useDispatch } from "react-redux";
function App() {

  const Dispatchers = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        Dispatchers({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        Dispatchers({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [Dispatchers]);

  return (

    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/userprofile">
            <Header />
            <Userprofile/>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;

import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Checkout from '../components/Checkout/Checkout';
import { auth } from '../containers/firebase';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import { useStateValue } from '../containers/StateProvider';
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "../components/Actions"
function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  const Counter = useSelector(state => state.CounterReducer)
  const Dispatchers = useDispatch();
  return (

    <Router>
      <div className="app">

        <h1>Counter :{Counter} </h1>
        <button onClick={() => Dispatchers(increment())}>+</button>
        <button onClick={() => Dispatchers(decrement())}>-</button>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
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

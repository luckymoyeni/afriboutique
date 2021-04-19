import "./App.css";
import { useState } from "react";
import Axios from "axios";
import { Header } from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AddProduct } from "./AddProduct";
import { ShowProduct } from "./ShowProduct";
function App() {


  return (
    <div className="App">
      <Router>
        <Header />
        
      </Router>


    </div>
  );
}

export default App;

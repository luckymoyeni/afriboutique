import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './core/App';
import reportWebVitals from './containers/reportWebVitals';
import reducer, { initialState } from './containers/reducer';
import { StateProvider } from './containers/StateProvider';
import { createStore } from "redux";
import AllReducers from "./components/Reducer"
import {Provider} from "react-redux";

let store = createStore(AllReducers);

// display 
store.subscribe(() => console.log(store.getState))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

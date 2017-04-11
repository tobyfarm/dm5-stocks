// Provider says he thiere isa componenent in here we need to pass our data to it, use the prodiver which in thi example we gave it store.. store is application state to all t
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import store from "./store";

import App from './App';
import './index.css';

ReactDOM.render(
<Provider store={ store }>
  <App />
</Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './components/Form';
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Form /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



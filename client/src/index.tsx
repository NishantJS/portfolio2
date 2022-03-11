import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./styles/index.scss";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

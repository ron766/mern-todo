import React from 'react';
import ReactDOM from 'react-dom';
import './public/css/index.css';
import App from './components/containers/App';
import * as serviceWorker from './serviceWorker';
import "./public/css/bootstrap.min.css"
import "./public/css/font-awesome.min.css"
import "./public/css/App.css";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

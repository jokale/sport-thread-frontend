import React from 'react';
import ReactDOM from 'react-dom';
 import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import threaddReducer from './reducers/threaddReducer'
import {BrowserRouter as Router, Route}  from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Sportupdate from './components/Sportupdate'
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as serviceWorker from './serviceWorker';

//The store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let store = createStore(threaddReducer, composeEnhancers(applyMiddleware(thunk)))



ReactDOM.render(
 <Provider store={store}> 
 <Router> 
   
   <div>
   <center><Navbar /></center>
   <App />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/updates" component={Sportupdate} />

   </div> 
   
  </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// move routes to apps

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//  serviceWorker.unregister();

import React from 'react';
//  import logo from './logo.svg';
 import './App.css';
 import {connect} from 'react-redux';
//  import {fetchThreadds} from './actions/fetchThreadds';
  import ThreaddsContainer from './containers/ThreaddsContainer';


  const mystyle = {
    color: "pink",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

class App extends React.Component {


  render(){

    
     return (
    <div className="App">
      
    <br></br>  <h1 mystyle={mystyle}>The Sport Thread </h1>
      <ThreaddsContainer/>
    </div>
  );
  }

}

export default connect() (App);
// export default connect(null,{fetchThreadds}) (App);

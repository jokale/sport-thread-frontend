import React from 'react';
  // import logo from './logo.svg';
   import logo from './tst-logo.png';

 import './App.css';
 import {connect} from 'react-redux';

//  import {fetchThreadds} from './actions/fetchThreadds';
  import ThreaddsContainer from './containers/ThreaddsContainer';




class App extends React.Component {


  render(){

    
     return (
    <div className="App">
       

    <br></br>  <h1 >The Sport Thread </h1>
      <ThreaddsContainer/>
    </div>
  );
  }

}

export default connect() (App);


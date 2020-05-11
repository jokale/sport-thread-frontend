import React from 'react';
//  import logo from './logo.svg';
 import './App.css';
 import {connect} from 'react-redux';
//  import {fetchThreadds} from './actions/fetchThreadds';
  import ThreaddsContainer from './containers/ThreaddsContainer';

class App extends React.Component {
  
  // componentDidMount() {
  //   // fetch('http://localhost:3000/threadds')
    
  //   // .then(res => res.json())
  //   // .then(jsonData => console.log(jsonData))
    
  //   this.props.fetchThreadds({type: 'FETCH_THREADDS', payload: {username: 'Joanna'}})
  // }

  render(){

    
     return (
    <div className="App">
      
      <h1>The Sport Thread </h1>
      <ThreaddsContainer/>
    </div>
  );
  }

}

export default connect() (App);
// export default connect(null,{fetchThreadds}) (App);

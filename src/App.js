import React from 'react';
//  import logo from './logo.svg';
 import './App.css';

class App extends React.Component {
  
  componentDidMount() {
    fetch('http://localhost:3000/threadds')
    
    .then(res => res.json())
    .then(jsonData => console.log(jsonData))
    
  }

  render(){

     return (
    <div className="App">
      
      <h1>The Sport Thread </h1>
    </div>
  );
  }

}

export default App;

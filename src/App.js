import React from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  
  componentDidMount() {
    fetch('// http://localhost:3000/threadds')
    
    .then(res => console.log(res.json()))
    .then(jsonData => console.log(jsonData))
    
  }

  render(){

     return (
    <div className="App">
      
      The Sport Thread
    </div>
  );
  }

}

export default App;

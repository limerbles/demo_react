import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Components/Message'
import Counter from './Components/NameList'
import NameList from './Components/NameList';
import Hello from './Components/Hello';
import Refs from './Components/Refs';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Hello name="Diana" heroName="Wonder Women"/>
        
       <Refs></Refs>
      </div>
    );
  }
}

export default App;

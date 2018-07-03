import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './component/Image.js'

class App extends Component {  
  render() {
    return (
      <div className="App">
        <Image imageSource = { 'https://http.cat/409' } />
      </div>
    );
  }
}

export default App;

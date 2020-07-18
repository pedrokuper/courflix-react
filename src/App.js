import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'

class App extends React.Component {
  render() {
    return(
      <div>
        <Navbar/>
        <Hero/>
      </div>
    )
  }
}

export default App;

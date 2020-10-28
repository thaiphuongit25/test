import React from 'react';
import './App.css';
import '../src/assets/common.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <div className="App">
            <Route path="/" exact component={ Home } />
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

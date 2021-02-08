import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages';

function App() {
  return (
    <Router>
      <Home/>
       <Route path='/contact' component={() => {
                window.location.href = 'https://wa.me/6281234046771';
                return null;
            }} />
    </Router>
  );
}

export default App;

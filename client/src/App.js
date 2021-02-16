import React, {useState} from 'react';
import {Router} from '@reach/router';
import './App.css';
import Register from './components/Register'
import Login from './components/Login'

function App() {
  const [user, setUser] = useState([]);
  return (
    <div className="App">
      <Router>
        <Register path='/'/>
        <Login path='/login'/>
      </Router>
      
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Background from './components/Background';

function App() {
  return (
    <Background>
      <Home />
    </Background>
  );
}

export default App;

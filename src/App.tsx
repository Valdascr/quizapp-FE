import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Background from './components/Background';

function App() {
  return (
    //   <div style={{ textAlign: 'center', marginTop: '50px' }}>
    //     <h1>Welcome to My First React Page! 🎉</h1>
    //     <p>This is a simple React app using TypeScript.</p>
    //   </div>
    // );
    <Background>
      <Home />
    </Background>
  );
}

export default App;

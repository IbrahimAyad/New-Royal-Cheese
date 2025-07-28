import React from 'react';
import Hero from './components/Hero';
import OutageNotification from './components/OutageNotification';
import './App.css';

function App() {
  return (
    <div className="App">
      <OutageNotification />
      <Hero />
      {/* Other components would go here */}
    </div>
  );
}

export default App;

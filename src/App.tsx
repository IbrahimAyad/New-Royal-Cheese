import React from 'react';
import CompleteWebsite from './components/CompleteWebsite';
import OutageNotification from './components/OutageNotification';
import './App.css';

function App() {
  return (
    <div className="App">
      <OutageNotification />
      <CompleteWebsite />
    </div>
  );
}

export default App;

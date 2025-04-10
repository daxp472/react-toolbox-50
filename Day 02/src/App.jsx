import React from 'react';
import './styles/App.css';
import EmailCopyDemo from './components/EmailCopyDemo';
import InputCopyDemo from './components/InputCopyDemo';
import FeedbackCopyDemo from './components/FeedbackCopyDemo';

function App() {
  return (
    <div className="app">
    <div className="app-container">
      <h1>React Clipboard Demo</h1>
      <section className="demo-section">
        <EmailCopyDemo />
        <InputCopyDemo />
        <FeedbackCopyDemo />
      </section>
    </div>
    </div>
  );
}

export default App;
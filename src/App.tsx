import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Copilot PoC Interface</h1>
        <p>A barebones React app for testing Copilot in Codespaces</p>
      </header>
      <main className="App-main">
        <section>
          <h2>Welcome</h2>
          <p>Use Copilot Chat in VS Code to prompt changes to this repository.</p>
          <p>Open the Copilot Chat panel and start building!</p>
          <button className="hello-button" type="button">Hello World</button>
        </section>
      </main>
    </div>
  );
}

export default App;
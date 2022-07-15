import './App.css';

function App() {
  const start = () => {
    return console.log("ButtonWorks")
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to PriyAnki!
        </p>
        <button onClick={start}>Start</button>
      </header>
    </div>
  );
}

export default App;
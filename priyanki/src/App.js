import './App.css';
import { Link } from "react-router-dom";
import raw from './demo.txt'


function App() {
  const start = () => {
    return (
      fetch(raw)
        .then(r => r.text())
        .then(text => {
        console.log('text decoded:', text);
    })
  )}
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to PriyAnki!
        </p>
        <Link to="/Start"><button onClick={start}> Start</button></Link>
        <Link to="/Homepage">Homepage</Link>
        <Link to="/Start">Start</Link>
      </header>
    </div>
  );
}
 
export default App;
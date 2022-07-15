import './App.css';
import { Link } from "react-router-dom";

function App() {
  const start = () => {
    return console.log('Start Button')
  }
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
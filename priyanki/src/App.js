import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

//Start Page
import Start from './Start/Start'

//Home Page
import Homepage from './Homepage/Home'


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
import './App.css';
import Home from "./pages/home/Home";

function App() {
    return (
        <div className="App">
            <div className="blur" style={{top: '-18%', right: '0'}}>Home</div>
            <div className="blur" style={{top: '36%', left: '-8rem'}}>Home 1</div>
            <Home/>
        </div>
    );
}

export default App;

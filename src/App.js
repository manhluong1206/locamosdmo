import './App.css';
import Navbar from './components/Navbar';
import Redeem from './components/Redeem';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Redeem/>
      </main>
    </div>
  );
}

export default App;

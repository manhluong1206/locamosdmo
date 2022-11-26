import './App.css';
import Navbar from './components/Navbar';
import Redeem from './components/About';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className='container'>
        <Redeem />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

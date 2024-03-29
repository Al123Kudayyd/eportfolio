import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Services from './components/Services';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Services />
      <About />
    </div>
  );
}

export default App;

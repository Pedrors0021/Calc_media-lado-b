import logo from './logo.svg';
import './App.css';
import MediaNotas from './components/MediaNotas';

function App() {
  return (
    <div className="App">
      <MediaNotas nota1="5" nota2="6" nota3="7"></MediaNotas>
    </div>
  );
}

export default App;

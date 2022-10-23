import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox'
import Header from './Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBox placeholder="AB" />
        <Header title="AB" desc="AB" image="https://images3.alphacoders.com/831/thumb-1920-831892.jpg" />
      </header>
    </div>
  );
}

export default App;

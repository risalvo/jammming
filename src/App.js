import logo from './logo.svg';
import './App.css';
import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults'
import Track from './components/Track/Track';
import Tracklist from './components/Tracklist/Tracklist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <Playlist/>
        <SearchBar/>
        <SearchResults/>
        <Track/>
        <Tracklist/>
        
      </main>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

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

      <BrowserRouter>
      <Switch>
        <Route path="/">
        {/* here, put the page for path "/" (default landing page) */}
        </Route>
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;

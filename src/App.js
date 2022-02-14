import { useSelector, useDispatch } from 'react-redux';
import { fetchFamily } from './asyncActions/family';
import logo from './logo.svg';
import './App.css';

function App() {
  const familyData = useSelector(state => state.family);
  const dispatch = useDispatch();
  const family = familyData
    ? familyData.map(item => {
      return (
        <div>{item.first_name}</div>
      )
    })
    : null;
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
        <button onClick={() => dispatch(fetchFamily())}>Click me</button>
        {family}
      </header>
    </div>
  );
}

export default App;

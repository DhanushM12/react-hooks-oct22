import './App.css';
import UseEffect from './hooks/UseEffect';
import UseMemo from './hooks/UseMemo';
import UseRef from './hooks/UseRef';
import UseState from './hooks/UseState';

function App() {
  return (
    <div className="App">
      <h1>Hooks</h1>
      <UseState />
      <br />
      <UseEffect />
      <br />
      <UseRef />
      <br />
      <UseMemo />
    </div>
  );
}

export default App;

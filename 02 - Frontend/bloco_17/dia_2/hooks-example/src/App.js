import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  }

  const resetCount = () => {
    setCount(0);
  }

  return (
    <div>
      <button onClick={handleCount}>{count}</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default App;

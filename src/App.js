import React, { useState, useEffect } from 'react';
import Demo from './Demo';
function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffects');
  }, []);
  useEffect(() => {
    console.log('useEffects count');
  }, [count]);
  return (<><h1>Total :{count} <button onClick={() => setCount(count + 1)}>Add</button></h1><br /><Demo /></>
  );
}

export default App;

import './App.css';
import {useState} from "react";
import Counter from './Counter';
import Info from './info';
import Average from './Average';

function App() {
  const [visible, setVisible] = useState(false);
  return (
<>
  <button onClick={() => {
  setVisible(!visible);
  }}>{visible ? '숨기기' : '보이기'}</button>
  <hr />
  {visible && <Info />}
    <Counter />
    <Average />
</>
  );
}

export default App;

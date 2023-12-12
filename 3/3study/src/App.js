import './App.css';
import MyComponent from './MyComponent';
import Counter from "./Counter";
import Say from './Say';
function App() {
  return (
<>
    <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
    <Counter></Counter>
    <Say />
</>
  );
}

export default App;

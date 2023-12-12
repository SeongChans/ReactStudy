//import React, { lazy, useState, Suspense } from 'react';
//import { Component } from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div> 
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick= () => {
   setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload(); // 해당 설정을 통해 마우스만 올려놓으면 로딩이 시작됨
  };
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
           {visible && <SplitMe />}
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header>
     </div>
   );
 }
export default App;
/* Suspense와 React.lazy를 사용한 방식
function App() {
 -> 함수형태로 메서드 안에서 사용하면, 파일을 따로 분리시켜 저장가능합니다.
   실제 함수가 필요한 지점에 파일을 불러와 함수를 사용할 수 있다. -> Promise를 반환
   표준 자바스크립트는 아니지만, stage-3 단계에 있는 dynamic import라는 문법
   이함수를 통해 모듈을 불러올 때 모듈에서 default로 내보낸 것은 result.default를 참조해야 사용할 수 있습니다.
 const [visible, setVisible] = useState(false);
 const onClick= () => {
  setVisible(true);
 };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
*/

/*
class App extends Component {
  state = {
    SplitMe : null // 어렵지는 않지만 매번 state를 선언해 주어야 함
  };
  handleClick = async () => {
    const loadedModule = await import('./SplitMe');
    this.setState({
      SplitMe: loadedModule.default
    });
  };
  render() {
    const { SplitMe } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handleClick}>Hello React!</p>
          {SplitMe && <SplitMe />}
        </header>
      </div>
    );
  }
}
export default App;
*/
// -> import {fragment} from "react";
import './App.css';


function App() {
/*  const name = "리액트";
  return (
    <div>  == <fragment> == <>
    {name === '리액트' && <h1>{name} 안녕!</h1>} 같은 결과값을 만듬
    {name === '리액트' ? <h1>{name} 안녕!</h1> : null}     
    </div> == </fragment> == </>
  ); */

/* const name = undefined; OR 함수를 이용해 방지 가능
return name || ' 값이 undefined입니다.'; */

/*const name = undefined;
return <>{name || '리액트'}</>; JSX내부에 랜더링하는 것은 괜찮다 */

/*const name = '리액트'; 
 const style = {
  backgroundColor : 'black', // background-color는 backgroundColor와 같이 - 가 사라지고 카멜 표기법으로 작성
  color: 'aqua',
  fontSize: '48px', //font-size -> fontSize
  fontWeight: 'bold', //font-weight -> fontWeight
  padding: 16 // 단위를 생략하면 px로 지정됨
};
return <div style={style}>{name}</div> */

/* const name='리액트';
return (
  <div
   style={{
      backgroundColor : 'black', // background-color는 backgroundColor와 같이 - 가 사라지고 카멜 표기법으로 작성
      color: 'blue',
      fontSize: '48px', //f/ont-size -> fontSize
      fontWeight: 'bold', //font-weight -> fontWeight
      padding: 16 // 단위를 생략하면 px로 지정됨
   }}>{name}</div>
) */

const name = '리액트';
return (
  <>
    <div className="react">{name}</div>
    <input />
  </>
);
}

export default App;
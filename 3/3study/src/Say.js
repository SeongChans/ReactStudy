import { useState } from "react"

const Say = () => {
    //객체 다루기
    const object = { a: 1, b: 2, c: 3};
    const nextObject = {...object, b: 4}; // 사본을 만들어서 값만 덮어 쓰기
    console.log(nextObject);
    //객체의 사본을 만들때에는 spread 연산자라 불리는 ...을 사용하면 된다.
    // 배열 다루기
    const array = [
        {id: 1, value: true},
        {id: 2, value: true},
        {id: 3, value: false}
    ];

    let nextArray = array.concat({id: 4});
    console.log(nextArray)
    //filter를 이용해 id가 2가 아닌 항복을 제거
    nextArray.filter(item => item.id !== 2);
    //map을 이용해 배열 전체를 확인하며, id가 1인 객체에 value값을 false로 바꿔줌
    nextArray.map(item => (item.id === 1 ? {...item, value: false} : item));

    const [message, setMessage] = useState("");
    //useState 함수의 인자에는 상태의 초깃값을 넣는다.
    //값의 형태는 상관없다.
    //첫번쨰 배열의 원소는 현재 상태
    //두번쨰 원소는 상태를 바꾸는 함수 - 세터(Setter)함수
    const onClickEnter = () => {setMessage("안녕하세요!")};
    const onClickLeave = () => {setMessage("안녕히 가세요!")};

    const [color, setColor] = useState("black");

    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color : "red"}} onClick={() => setColor("red")}>빨간색</button>
            <button style={{color : "green"}} onClick={() => setColor("green")}>초록색</button>
            <button style={{color : "blue"}} onClick={() => setColor("blue")}>파란색</button>
        </div>
    );
};

export default Say;
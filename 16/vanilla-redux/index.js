import { createStore } from "redux";

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btndecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE-SWITCH'
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
//액션 타입 정의 *문자열 형태 주로 대문자 작성 이름은 고유해아함


const toggleSwitch = () => ({ type: TOGGLE_SWITCH})
const increase = difference => ({type: INCREASE, difference});
const decrease = () => ({type: DECREASE});
// 액션 생성 함수 정의 *액션 객체는 type 값을 반드시 갖고 있어야 한다. 업데이트에 참고하고 싶은 값은 마음대로

const initialState = {
    toggle: false,
    counter: 0
};
// 초깃값 설정 * 초깃값 형태는 자유, 숫자/ 문자열/ 객체 상관없음

const store = createStore(reducer);
const render = () => {
    const state = store.getState(); //현재 상태를 불러옵니다.
    // 토글 처리
    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    //카운터 처리
    counter.innerText = state.counter;
};

render();
//render 함수 만들기 - 상태가 업데이트될 때마다 호출되며, 리액트의 render함수와는 다르게
//  이미 html을 사용하여 만들어진 UI의 속성을 상태에 따라 변경해줍니다.

store.subscribe(render);
//구독하기 - 상태가 바뀔때마다 방금 만든 render 함수가 호출 됨
//store 내장 함수 subscribe를 사용해 수행
//subscribe 함수 파라매터로는 함수 형태의 값을 전달해 줍니다.
// 전달된 함수는 추후 액션이 발생하여 상태가 업데이트 될 때ㅏ다 호출

// state가 undefined일 때는initalState를 기본값으로 사용
function reducer(state = initialState, action) {
    //action.type에 따라 다른 작업을 처리함
    switch (action.type) {
        case TOGGLE_SWITCH:
            return{
                ...state, //불변성 유지를 해주어야 합니다.
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return{
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}
// 리듀서 함수 정의
/* 
    리듀서 함수가 처음 호출될 때는 state 값이 undefined입니다.
    해당 값이 indefined로 주어졌을 떄 initalState를 기본값으로 설정하기 위해 함수의 파라매터 쪽에 기본값이 설정되어 있습니다.
    리듀서에서는 상태의 불변성을 유지하면서 데이터에 변화를 일으켜주어야합니다.spread 연산자(...)를 사용하면 편하다.
    단, 객체의 구조가 복잡해지면 가독성도 나빠지고, 관리하는 것이 번거로워지므로 깊지 않은 구조로 진행
    immer를 사용하면 배열이나 복잡한 구조에 대해 쉽게 작성 가능
*/

divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btndecrease.onclick = () => {
    store.dispatch(decrease());
};
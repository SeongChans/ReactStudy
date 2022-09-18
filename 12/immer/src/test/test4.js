const update = produce(draft => {
    draft.value = 2;
});

 //immer함수를 호출할 떄 첫번째 파라매터가 함수 형태라면 업데이트 함함수를 반환합니다

const originalState = {
    value: 1,
    foo: 'bar',
};
const nextState = update(originalState);
console.log(nextState); // {value: 2, foo: 'bar' }
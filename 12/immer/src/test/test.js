import produce from 'immer'
                            //첫번째 파라매터 - 수정하고 싶은 상태
                            //두번째 파라매터 상태를 어떻게 업데이트 할지
                            //두번째 파라매터로 전달되는 함수 내부에서 원하는 값을 변경하면
                            //  produce함수가 불변성 유지를 대신 해주면서 새로운 상태를 생성
const nextState = produce(originalState, draft => {
    //바꾸고 싶은 값 바꾸기
    draft.somewhere.deep.inside = 5;
})
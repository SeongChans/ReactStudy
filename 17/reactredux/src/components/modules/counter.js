import { createAction, handleActions } from 'redux-actions';

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE"

// redux-actios를 이용한 함수 만들기
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
/* 리덕스 액션 함수 생성 기본형태
export const increase = () => ({ type: INCREASE});
export const decrease = () => ({ type: DECREASE}); 
*/

const initialState = {
    number : 0
};

// redux-actions를 이용한 리듀서 생성 함수
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1}),
        [DECREASE]: (state, action) => ({ number: state.number - 1})
    }, initialState,
);

/*  리덕스 리듀서 함수 기본형태 
function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    };
};
 */

export default counter;

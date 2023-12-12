import { useCallback } from 'react';
import Counter from '../Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

const CounterContainer = () => {
   const number = useSelector(state => state.counter.number);
   const dispatch = useDispatch();
   const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
   const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
    <Counter
        number={number} onIncrease={onIncrease} onDecrease={onDecrease}
     />
    );
};

export default connect(
    state => ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease,
    },
    /* dispatch => bindActionCreators(
        {
            increase,
            decrease,
        },
        dispatch,
    ), */
)(CounterContainer);

/* const mapStateToProps = state => ({
    number : state.counter.number,
});

const mapDispatchToProps = dispatch => ({
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);
 */
/* 
    export defauult connect(
        state =>({
            number: state.counter.number,
        }),
        dispatch => ({
            increase: () => dispatch(increase()),
            decrease: () => dispatch(decrease()),
        }),
    ) (CounterContainer); -> 해당 코드와 같은 기능을 함 */
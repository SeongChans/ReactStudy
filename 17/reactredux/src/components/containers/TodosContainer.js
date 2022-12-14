import React from 'react';
import { useCallback } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../Todos';

const TodosContainer = () =>{
    const { input, todos } = useSelector(({todos}) => ({
        input : todos.input,
        todos : todos.todos
    }));
    const dispatch = useDispatch();
    const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
    const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
    const onToggle = useCallback(id => dispatch(toggle(id)),[dispatch]);
    const onRemove = useCallback(id => dispatch(remove(id)),[dispatch]);

    return(
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};
export default React.memo(TodosContainer); //성능 최적화를 위한 react memo사용 
/* export default connect(
    //비구조화 할당을 통해 todos를 분리하여
    //state.todos.input 대신 todos.input을 사용
    ({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    {
        changeInput용
        insert,
        toggle,
        remove,
    },
)(TodosContainer);
 */
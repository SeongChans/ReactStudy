import './App.css';
import produce from 'immer';
//immer는 불변성 유지하는 코드가 복잡할 때만 사용해도 충분하다
import { useRef, useCallback, useState } from "react";

function App() {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', userName:''});
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

//input 수정을 위한 함수
  const onChange = useCallback(
    e => {
      const {name, value} = e.target;
      setForm(
        produce(draft => { draft[name] = value;
        })
      );
    },[]
  );

//form 등록을 위한 함수
  const onSubmit = useCallback(e => {
    e.preventDefault();
    const info = {
      id: nextId.current,
      name: form.name,
      userName: form.userName
    };

  //array에 새 항목 등록
    setData(
      produce(draft => { draft.array.push(info)
      })
    );

  //form 초기화
    setForm({
      name: '',
      userName: ''
    });
    nextId.current += 1;
    }, [data, form.name, form.userName]
  );

// 항목을 삭제하는 함수
  const onRemove = useCallback(id => {
    setData(
      produce(draft => {
        draft.array.splice(draft.array.findIndex(info => info.id !== id), 1);
      })
    )
    },[data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="userName"
          placeholder='아이디'
          value={form.userName}
          onChange={onChange}/>
        <input 
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
        {data.array.map(info => (
          <li key={info.id} onClick={() => onRemove(info.id)}>
            {info.userName} ({info.name})
          </li>
         ))}
        </ul>
      </div>
    </div>
    );
};

export default App;

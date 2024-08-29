import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const [todo,setTodo] = useState("");
  const todoList = useSelector(state => state.todoList);

  const saveTodo = () => {
    dispatch({type:"SAVE_TODO", payload:todo});
  }
  const removeTodoButton = (index) => {
    dispatch({type:"REMOVE_TODO", payload:index});
  }
  
  return (
    <>
      <h1 className='title'>Todo_List</h1>
      <div className='container'>
        <div>
          <input type='text' placeholder='입력해 주세요' onChange={(e) => setTodo(e.target.value)} />
          <button onClick={saveTodo}>추가하기</button>
        </div>
        <div>
          {todoList.length > 0 ? (
              todoList.map((item,index) => (
                <div className='todo-box' key={index}>
                  <p>{item}</p>
                  <button
                    className='remove-btn'
                    onClick={() => removeTodoButton(index)}
                  >
                    삭제하기
                  </button>
                </div>
              ))
            ) : (
              <p>할 일이 없습니다.</p>
          )}
        </div>
      </div>
      
    </>
  );
}

export default App;

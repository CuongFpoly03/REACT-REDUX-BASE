/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { connect } from 'react-redux'
import './App.css'
// eslint-disable-next-line no-unused-vars
import { ADD_TODO, addTodo } from './redux/Actions';

// eslint-disable-next-line react-refresh/only-export-components
function App({todos, test, dispatch}) {
  const [todo, setTodo] = useState("");
  console.log(todos, test);

  return (
    <div className='App' style={{marign: 'auto', width: 400}}>
      <h1>Todo List</h1>
      <ul>{todos && todos.map((td, idx)=> (
        <li key={td}>{td}</li>
      ))}</ul>
      LengTh: {todos && todos.length}
      <hr/>
      <form action="" onSubmit={e => {e.preventDefault();
      dispatch({type: ADD_TODO, todo});
      setTodo("")
      }}>
        <input placeholder='enter' value={todo} onChange={
          e => e.target.value
        } ></input>
      </form>
    </div>
  )
}

const mapStateToprops = state => ({
  todos: state.todos.todos,
  test: "acb"
})

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToprops)(App);

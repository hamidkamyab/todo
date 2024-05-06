import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos,handelDel,handelDone}) {
  return (
    <div className='todos border-top border-1 py-3'>
      {
        todos && todos.map((item,index)=>(<TodoItem todo={item} key={index} del={handelDel} done={handelDone} />))
      }
    </div>
  )
}

export default TodoList

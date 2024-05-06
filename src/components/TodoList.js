import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos,handelDel,handelDone}) {
  return (
    <div className='todos border-top border-1 py-3'>
      {
        todos.length > 0?
        todos.map((item,index)=>(<TodoItem todo={item} key={index} del={handelDel} done={handelDone} />))
        :
        <p className='text-center m-0 p-2 bg-danger text-white'>هنوز کاری را ثبت نکرده اید.</p>
      }
    </div>
  )
}

export default TodoList

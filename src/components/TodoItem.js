import React from 'react'
import * as FA6 from "react-icons/fa6";

function TodoItem({todo,del,done}) {
    return (
        <div className='todoItem d-flex align-items-center justify-content-between p-2 border border-1' data-done={todo.done}>
            <p className='p-0 pe-3 m-0'>
                {todo.title}
            </p>
            <div className='opratIcon d-flex align-items-center gap-3'>
                <button className='btn btn-sm btn-success p-0 pb-1 px-2' onClick={()=>done(todo.id)}>
                    {
                        todo.done ?
                        <FA6.FaArrowRotateRight size={14} />
                        :
                        <FA6.FaCheck size={14} />
                    }

                </button>
                <button className='btn btn-sm btn-danger p-0 pb-1 px-2' onClick={()=>del(todo.id)}>
                    <FA6.FaTrashCan size={14} />
                </button>
            </div>
        </div>
    )
}

export default TodoItem
import React from 'react'

function Form({todo,handleTodo,addTodo}) {
    return (
        <form className='todoForm' onSubmit={addTodo}>
            <div className='col-12 d-flex'>
                <div className="col-10 px-1">
                    <input type="text" className="form-control form-control-sm" value={todo} onChange={(e)=>handleTodo(e.target.value)} />
                </div>
                <div className="col-2 px-1">
                    <button className='btn btn-primary btn-sm'>
                        افزودن کار
                    </button>
                </div>

            </div>
        </form>
    )
}

export default Form
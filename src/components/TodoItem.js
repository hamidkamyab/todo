import React from 'react'
import * as FA6 from "react-icons/fa6";

function TodoItem() {
    return (
        <div className='todoItem d-flex align-items-center justify-content-between p-2 border border-1'>
            <p className='p-0 pe-3 m-0'>
                سلام خوب هستی این یک متن تستی است که ببینیم چه اتفاقی میوفتد حالا میتوان ادامه داد
            </p>
            <div className='opratIcon d-flex align-items-center gap-3'>
                <button className='btn btn-sm btn-success p-0 pb-1 px-2'>
                    <FA6.FaCheck size={14} />
                </button>
                <button className='btn btn-sm btn-danger p-0 pb-1 px-2'>
                    <FA6.FaTrashCan size={14} />
                </button>
            </div>
        </div>
    )
}

export default TodoItem
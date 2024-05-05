import React from 'react'

function Form() {
    return (
        <form>
            <div className='col-12 d-flex'>
                <div className="col-10 px-1">
                    <input type="text" className="form-control form-control-sm" />
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
import React from 'react'

function Layout({ children }) {
    return (
        <div className='container col-12 d-flex py-5 justify-content-center'>
            <div className="col-6 border border-1 p-3 d-flex flex-column gap-4">
                {children}
            </div>
        </div>
    )
}

export default Layout

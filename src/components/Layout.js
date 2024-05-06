import React from 'react'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <div className='layout container col-12 d-flex flex-column py-5 justify-content-between align-items-center vh-100 gap-1'>
            <div className="children col-6 border border-1 p-3 d-flex flex-column gap-4 bg-white">
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default Layout

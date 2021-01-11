import React from 'react'

import './Layout.css';

function Layout({children}){
    return(
        <div className="app-layout">
            <main className="app-main">
                {children}
            </main>
        </div>
    )
}

export default Layout
import React from 'react'

import './Title.css'

function Title({children, onClick}){
    return <p id="app-title" onClick={onClick}>{children}</p>
}

export default Title
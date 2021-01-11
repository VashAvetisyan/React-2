import React from 'react'

import './Title.css'

function Title(props){
    return <p id="app-title">{props.children}</p>
}

export default Title
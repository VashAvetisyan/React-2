import React from 'react'

import './Input.css'
function Input(props){
    return <input className='input-app' type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.userName}/>
}

export default Input
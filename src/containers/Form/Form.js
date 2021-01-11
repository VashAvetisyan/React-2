import React, {useState} from 'react'

import Input from '../../component/Input/Input'
import Title from '../../component/Title/Title'
import Button from '../../component/Button/Button'

import profile from '../../assets/profile.png'

import './Form.css'

import {ValidateName} from '../../utils/validate'
import {ValidatePassword} from '../../utils/validate'

function Form(){
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPasssword] = useState('')
    const [errorTextName, setErrorName] = useState('')
    const [errorTextPassword, setErrorPassword] = useState('')

    const onChangeName = (e) => {
        setUserName(e.target.value)
    }
    const onChangePassword = (e) => {
        setUserPasssword(e.target.value)
    }

    const LoginBtn = () => {
        let userData = {
            Name:userName,
            Password:userPassword
        }
    
        if(ValidateName(userData).isValidName === false){
            setErrorName(ValidateName(userData).errorName)
        }
        if(ValidateName(userData).isValidName){
            setErrorName("")
        }

        if(ValidatePassword(userData).isValidPassword === false){
            setErrorPassword(ValidatePassword(userData).errorPassword)
        }
        if(ValidatePassword(userData).isValidPassword){
            setErrorPassword("")
        }
        
        if (ValidateName(userData).isValidName && ValidatePassword(userData).isValidPassword) {
            alert(
                "Name - " + userName + "\nPassword - " + userPassword
            )
        }
    } 
 
    
    return(
        <div id ="form-main">
            <form id="app-form">
                <Title> LOGIN </Title>
                <img src={profile} id='app-porfile' alt='title'/>
                <Input type='text' placeholder='username' onChange={onChangeName} value={userName}/>
                <p className='error-text'>{errorTextName}</p>
                <Input type='password' placeholder='password' onChange={onChangePassword} value={userPassword}/>
                <p className='error-text'>{errorTextPassword}</p>
                <Button onClick={LoginBtn}>LOGIN</Button>
            </form>
        </div>
    )
}

export default Form 

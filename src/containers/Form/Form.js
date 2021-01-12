import React, {Component } from 'react'

import Input from '../../component/Input/Input'
import Title from '../../component/Title/Title'
import Button from '../../component/Button/Button'

import profile from '../../assets/profile.png'

import './Form.css'

import {validateName} from '../../utils/validate'
import {validatePassword} from '../../utils/validate'


class Form extends Component{
    state = {
        userName: '',
        userPassword:'',
        errorTextName:'',
        errorTextPassword:''
    }

    onChangeName = (e) => {
        this.setState({
            userName:e.target.value
        });
    };

    onChangePassword = (e) => {
        this.setState({
            userPassword:e.target.value
        })
    }
    
    LoginBtn = () => {
        this.userData = {
            Name:this.state.userName,
            Password:this.state.userPassword
        }
    
        if(validateName(this.userData).isValidName === false){
            this.setState({
                errorTextName:validateName(this.userData).errorName
            })
        }

        if(validateName(this.userData).isValidName){
            this.setState({
                errorTextName:""
            })
        }

        if(validatePassword(this.userData).isValidPassword === false){
            this.setState({
                errorTextPassword:validatePassword(this.userData).errorPassword
            })
        }
        if(validatePassword(this.userData).isValidPassword){
            this.setState({
                errorTextPassword:""
            })
        }
        
        if (validateName(this.userData).isValidName && validatePassword(this.userData).isValidPassword) {
            alert(
                "Name - " + this.state.userName + "\nPassword - " + this.state.userPassword
            )
        }
    } 

    render(){
        return(
            <div id ="form-main">
            <form id="app-form">
                <Title> LOGIN </Title>
                <img src={profile} id='app-porfile' alt='title'/>
                <Input type='text' placeholder='username' onChange={this.onChangeName} value={this.userName}/>
                <p className='error-text'>{this.state.errorTextName}</p>
                <Input type='password' placeholder='password' onChange={this.onChangePassword} value={this.userPassword}/>
                <p className='error-text'>{this.state.errorTextPassword}</p>
                <Button onClick={this.LoginBtn}>LOGIN</Button>
            </form>
        </div>
        )
    }
}

export default Form 

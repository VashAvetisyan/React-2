import React, {Component } from 'react'

import Input from '../../../component/Input/Input'
import Button from '../../../component/Button/Button'

import profile from '../../../assets/profile.png'

import './Singup.css'

import {validateName} from '../../../utils/validate'
import {validatePassword} from '../../../utils/validate'


class Singup extends Component{
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
                    <img src={profile} id='app-porfile' alt='title'/>
                    <Input type='text' placeholder='First Name' onChange={this.onChangeName} value={this.userName}/>
                    <p className='error-text'>{this.state.errorTextName}</p>
                    <Input type='text' placeholder='Last Name' onChange={this.onChangeName} value={this.userName}/>
                    <p className='error-text'>{this.state.errorTextName}</p>
                    <Input type='password' placeholder='password' onChange={this.onChangePassword} value={this.userPassword}/>
                    <p className='error-text'>{this.state.errorTextPassword}</p>
                    <Button onClick={this.LoginBtn}>Sing up</Button>
                </form>
            </div>
        )
    }
}

export default Singup
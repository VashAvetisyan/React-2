import React, {Component } from 'react'

import Title from "../../component/Title/Title";

import Login from'./Login/Login'
import Singup from'./Singup/Singup'

import "./Auth.css";

class Auth extends Component{
    state = {
        isLogin:true,
    }

    toggleView = () =>{
        this.setState({
            isLogin:!this.state.isLogin
        })
    }
    
    render(){
        return(
            <div>
                <Title onClick={this.toggleView}>{this.state.isLogin ? 'Sing up' : "Login"}</Title>
                {this.state.isLogin ? 
                    <Login >    
                        
                    </Login>
                    :
                    <Singup />
                }
            </div>
        )
    }
}

export default Auth 
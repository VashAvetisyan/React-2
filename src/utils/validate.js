import React from 'react'

export const ValidateName = (val) => {
    if (val.Name.length < 8) {
        return {
            errorName:'minimum 8 letters!',
            isValidName:false
        }
    }else if(val.Name.includes(" ")){
        return {
            errorName:'do not use a space!',
            isValidName:false
        }
    }else{
        return {
            isValidName:true,
        }
    }
}


export const ValidatePassword = (val) => {
    if (val.Password.length < 6) {
        return {
            errorPassword:'minimum 6 letters!',
            isValidPassword:false
        }
    }else if(val.Password.includes(" ")){
        return {
            errorPassword:'do not use a space',
            isValidPassword:false
        }
    }else{
        return {
            isValidPassword:true
        }
    }
}

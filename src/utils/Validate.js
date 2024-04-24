import React ,{useState}from "react";


export const ValidateData = (email,password,confirmPassword,username) => {
const isValideEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
const isValidePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
const isValideUsername =/^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(username)
 
  
// if(!isValideUsername) return "first letter should be alpha "
if(!isValideEmail) return "email is not valid"
if (!isValidePassword) 
    return "password is not up to mark"
// else if(isValidePassword )
// {
//     if(confirmPassword!==password)
//     return "password does not match"
// }

return null


};

export default ValidateData;

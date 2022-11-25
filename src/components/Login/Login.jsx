

import React from "react";
import SignUp from "./SignUp/SignUp.jsx";
import {  NavLink } from "react-router-dom";
import s from "./Login.module.css"



const Login = () => {
  
return(

<div className={s.container} >
  <button className={s.buttonSignIn} > <NavLink to="/Login/SignUp"> SignUp </NavLink> </button>
  <button className={s.buttonSignUp}> <NavLink to="/Login/SignIn"> SignIn </NavLink></button>
</div>
)
}


export default Login
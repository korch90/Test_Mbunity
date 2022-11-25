
import axios from "axios";
import React from "react";
import { useState , useEffect} from "react";
import {auth} from "../../../firebase"
import {signInWithEmailAndPassword} from "firebase/auth"

import { BadLogin } from "../BadLogin/BadLogin";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../RoutesStorage.jsx";
import db from "../../../firebase"
import { collection ,addDoc, onSnapshot } from 'firebase/firestore';
import { async } from "@firebase/util";
import s from "./SignIn.module.scss"
const SignIn = () => {
   
   
    const[badLogin, setBadLogin]=useState({boolean:false, text:""})
    const [color, setColor]=useState("red")
    const [users, setUsers]=useState([])

        const [formValue, setFormValue] = useState({
            email: "",
            password: ""
        })
        const handleChange = (e, key) => {
            setFormValue({
                ...formValue,
                [key]: e.target.value
            })
        }

const navigate=useNavigate()

        const handleSignUp = async (event) => {
            event.preventDefault()
          
            try {
                const user = await signInWithEmailAndPassword(auth, formValue.email, formValue.password)
               
                console.log(user.user.email)
                 localStorage.setItem("userEmail",  user.user.email)
                    setColor("green")
                    setBadLogin({boolean:false,text:"Sucsesfull"})
                   /////доробити  або СВ або СвАдмін
                    setTimeout( ()=>navigate(AppRoutes.HOME),2200)


            } catch (err){
                if(err.code==='auth/wrong-password'){
                    console.log("wrong-password")
                    setBadLogin({boolean:true,text:"wrong-password"})
                }
                else if(err.code==='auth/user-not-found'){
                    console.log("user-not-found")
                    setBadLogin({boolean:true,text:"user-not-found"})
                }
                else if(err.code==='auth/invalid-email'){
                    console.log("invalid-email")
                    setBadLogin({boolean:true,text:"invalid-email"})
                }
                else {
                    console.log(err.code)
                }
              }
             finally {
              console.log(badLogin)  
            }
        }


return(
    <div className={s.container}  >

 <p>Sign In</p>
 
<form className={s.form} action="">
<div className={s.formSection} >
<label  style={{color:color}} htmlFor="">Email</label>
<input type="email" value={formValue.email}
placeholder={"email"}  autoComplete="true"
 onChange={(e)=>handleChange(e,"email")} />

</div>
<div className={s.formSection} >
<label style={{color:color}} htmlFor="">Password</label>
<input type="password" value={formValue.password}
placeholder={"password"}  autoComplete="true"
 onChange={(e)=>handleChange(e,"password")} />
 </div>
<button className={s.btn} onClick={handleSignUp} >Sign In</button>

</form>
{badLogin.boolean?<BadLogin text={badLogin.text} />:null}
{badLogin.text==="Sucsesfull"&& <p>Sucsesfull</p> }

    </div> 
)
}

export default SignIn
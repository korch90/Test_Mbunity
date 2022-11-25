
import axios from "axios";
import React from "react";
import { useState , useEffect} from "react";
import {auth} from "../../../firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"
import { BadLogin } from "../BadLogin/BadLogin";
import { redirect, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../RoutesStorage.jsx";
import s from "./SignUp.module.scss"



const SignUp = () => {
    const[badLogin, setBadLogin]=useState({boolean:false, text:""})
    const [color,setColor]=useState("brown")

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
                const user = await createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
                console.log(user)
               setColor("green")
                setBadLogin({boolean:false,text:"Sucsesfull"})
               
                setTimeout( ()=>navigate(AppRoutes.SIGNIN),2200)
                formValue({
                    email: "",
                    password: ""
                })
                
            } catch (err){
                if(err.code==='auth/invalid-email'){
                    setBadLogin({boolean:true,text:"invalid-email"})
                }
                else if(err.code==='auth/weak-password'){
                    setBadLogin({boolean:true,text:"weak-password"})
                }
                else if(err.code==='auth/email-already-in-use'){
                    setBadLogin({boolean:true,text:"email-already-in-use"})
                }
                else {
                    console.log(err.code)
                }
              }
        
        }
        


return(
    <div className={s.container} >

<p> Sign Up</p>

<form className={s.form} action="">
<div className={s.formSection} >
<label  style={{color:color}} htmlFor="">Email</label>
<input type="email"  value={formValue.email}
placeholder={"email"}  autoComplete="true"
 onChange={(e)=>handleChange(e,"email")} />
 </div>

<div className={s.formSection}>
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


export default SignUp
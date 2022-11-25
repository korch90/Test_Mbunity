import s from "../Logo/Logo.module.css"
import React, { Component, useEffect,useState }  from 'react';

 const Logo=()=>{
    const logo = require("../../image/logo3.png")

    const [state,setState]=useState(false)
const logoMove=()=>{
    setState(true)
}
    

return(
<div className={ !state? s.logo:s.logoMove}>
<img src={logo} alt="#"  onMouseOver={()=>logoMove()} className={  s.logo_img } />
</div>
)

 }
 export default Logo
import s from "../Preloader/Preloader.module.css"
import React, { Component }  from 'react';
 
 const Preloader=(props)=>{

return(
    props.isResponseCome?<div className={s.lds_roller}><div></div><div></div><div></div><div></div>
<div></div><div></div><div></div><div></div></div>:null
)

 }
 export default Preloader
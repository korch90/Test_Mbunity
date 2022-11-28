import React, { Component }  from 'react';
import CV_Admin from './CV/CVAdmin';
import CV from "../components/CV/CV"
import s from "./Home.module.scss"

const Home=()=>{
    const log=localStorage.getItem("userEmail")
    // if (log==null){
    //     log=undefined
    // }
    console.log(log)
    // console.log(null==false)
    return(
        
<div   >

{log?   <CV_Admin/>  :  <CV/>}



</div>

    )
}
export default Home
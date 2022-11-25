import React, { Component }  from 'react';
import CV_Admin from './CV/CVAdmin';
import CV from "../components/CV/CV"
import s from "./Home.module.scss"

const Home=()=>{
    const log=localStorage.getItem("userEmail")
    console.log(log)
    return(
        
<div   >

{log&&log==="korch90@gmail.com"? <CV_Admin/> :log?<CV/>:

<div className={s.container} ><p>You must be authorized to see this magic CV</p>  <p>Please Do it!</p> </div>
}

</div>
    )
}
export default Home
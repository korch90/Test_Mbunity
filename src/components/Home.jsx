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
sdcsd
{log&&log==="korch90@gmail.com"? <CV_Admin/> :log?<CV/>:


<>
<div className={s.InfoBanner} >
  <span className={s.reversed+" "+ s.reversedRight}>
    <span>
      &#9888;
    </span>
  </span>
  <span className={s.reversed+" "+ s.reversedLeft}>
  You must be authorized to see this magic CV!!!
  
  </span> 
</div>
<div className={s.InfoBanner2} >
  <span className={s.reversed+" "+ s.reversedRight}>
    <span>
      &#9888;
    </span>
  </span>
  <span className={s.reversed+" "+ s.reversedLeft}>
  Please Do it!

  </span> 
</div>
</> 

}
{/* <div className={s.container} ><p>You must be authorized to see this magic CV</p>  <p>Please Do it!</p> </div> */}


</div>

    )
}
export default Home
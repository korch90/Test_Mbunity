import s from "../Header/Header.module.css"
import Logo from "../Header/Logo/Logo.jsx"
import Nav from "../Header/Nav/Nav.jsx"
import { useState } from "react";
import { useEffect } from "react";

const Header=()=>{
    const [show_burger, setShow_burger]=useState(true)

const handle_burger=()=>{
    setShow_burger(prev=>!prev)
}
    return(
  
<div  className={ show_burger?s.header_wrapper :s.header_wrapper_black }>
<Logo show_burger={show_burger}/>
<Nav  handle_burger={handle_burger} show_burger={show_burger} setShow_burger={setShow_burger} />

 

</div>
    )
}

export default Header
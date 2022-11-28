
import React from "react";
import s from "./ThemeToggleWrapper.module.css"
import { useContext } from "react";
import ThemeContext from "../Context";


const ThemeToggleWrapper=()=>{
 const {themeMode, setThemeMode} =useContext(ThemeContext)

return(
    <div className={s.wrapper}>
    
    <label className={s.toggle}>
  <input className={s.toggle_checkbox} type="checkbox" checked={themeMode} onChange={()=>{ themeMode? setThemeMode(false):setThemeMode(true)}}  />
  <div className={s.toggle_switch}></div>
  <span className={s.toggle_label}></span>
</label>


    </div>
)
}


export default ThemeToggleWrapper
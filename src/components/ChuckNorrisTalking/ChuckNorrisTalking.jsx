 import s from "./ChuckNorrisTalking.module.css"
// import { Routes,Route, NavLink } from "react-router-dom";
// import ThemeContext from "../Context"
// import { useContext } from "react";
import React, { Component }  from 'react';
import Users from "./Users/Users";
import Chat from "./Chat/Chat";


const ChuckNorrisTalking=()=>{
    
    return(
        <div className={s.wrapper}  >
<Users/>
<Chat/>


</div>
    )
}

export default ChuckNorrisTalking

{/* <Routes>
 <Route path={AppRoutes.CV} element={<CV />} />
</Routes> */}
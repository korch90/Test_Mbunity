 import s from "./Users.module.css"
// import { Routes,Route, NavLink } from "react-router-dom";
// import ThemeContext from "../Context"
// import { useContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import {ActionChatReducer} from "../../redux/action/ActionChatTimeReducer"
import shortid from 'shortid';
import React, { Component, useEffect, useState }  from 'react';



const Users=()=>{
    const chatStore=useSelector(state=>state.CHAT_Reducer.chatStore)
    const dispatch=useDispatch()



    return(
        <div className={s.wrapper}  >
<div className={s.search} >
<input type="text" className={s.searchInput} />

</div>

<ul  >
{chatStore.users.filter(el=>el.id!==1).map(el=><li key={shortid.generate()} > <img src={el.url} alt="" /> {el.name} {el.sname}</li>)}
</ul>

</div>
    )
}

export default Users

{/* <Routes>
 <Route path={AppRoutes.CV} element={<CV />} />
</Routes> */}
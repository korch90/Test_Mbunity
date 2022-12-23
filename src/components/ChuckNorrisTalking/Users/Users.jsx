 import s from "./Users.module.css"
import { useDispatch, useSelector } from "react-redux";
import {ActionChatReducer} from "../../redux/action/ActionChatReducer"
import shortid from 'shortid';
import React, { Component, useEffect, useState }  from 'react';



const Users = () => {
        const chatStore = useSelector(state => state.CHAT_Reducer.chatStore)
        const dispatch = useDispatch()
        const [inputValue, setInputValue] = useState("")

const handleSelect = (index) => {

    let NewUserWithChat = {
        ...chatStore
    }
    NewUserWithChat.chatWith = index + 2
    dispatch(ActionChatReducer.userWithChat(NewUserWithChat))
}

const handleSearchUser = (e) => {
    setInputValue(e.target.value)

}





     return(
        <div className={s.wrapper}  >
<div className={s.search} >
<input type="text"  value={inputValue} onChange={(e)=>handleSearchUser(e)}  className={s.searchInput} />

</div>

<ul  >

 { chatStore?.users?.filter(el=>el.id!==1).filter(el=>el.name.toLowerCase().includes(inputValue.toLowerCase())||el.sname.toLowerCase().includes(inputValue.toLowerCase())).map((el,index)=><li onClick={()=>handleSelect(index)} key={shortid.generate()} > <img className={s.img} src={el.url} alt="" /> {el.name} {el.sname}</li>)}
</ul>

</div>
    )
}

export default Users

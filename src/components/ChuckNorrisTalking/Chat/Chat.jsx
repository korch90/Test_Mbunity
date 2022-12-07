 import s from "./Chat.module.css"
import React, { Component, useEffect, useState }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import {ActionChatReducer ,pushMessage} from "../../redux/action/ActionChatTimeReducer"
import shortid from 'shortid';
import thunk from "redux-thunk"




const Chat=()=>{

console.log("render")
const chatStore=useSelector(state=>state.CHAT_Reducer.chatStore)
const dispatch=useDispatch()
const [userWithChat,setUserWithChat]=useState(0)
const [editMode,setEditMode]=useState(false)
const pushMessageThunk=(chatStore)=>dispatch(pushMessage(chatStore))
const [wichMessageEdit,setWichMessageEdit]=useState(0)
const [messageValue,setMessageValue]=useState("")

useEffect(()=>{
  
    dispatch(ActionChatReducer.pushMessage(chatStore))
},[])



// console.log(chatStore)




const handleEditMessage=(el,index)=>{
    setMessageValue(el.text)
    setWichMessageEdit(index)
    setEditMode(true)
}

const handleDeleteMessage=(el,index)=>{
    // console.log(index,el)
    setWichMessageEdit(index)
  let test=chatStore
   test.users.filter(e=>e.id===1)[0].messageWith.filter(e=>e.id===2)[0].message.splice([index],1)
 console.log(chatStore.users.filter(e=>e.id===1)[0].messageWith.filter(e=>e.id===2)[0].message)
    dispatch(ActionChatReducer.pushMessage(test))

}

const handleSendMessage=()=>{

    if(editMode){
   
        chatStore.users.filter(e=>e.id===1)[0].messageWith.filter(e=>e.id===2)[0].message[wichMessageEdit].text=messageValue
        dispatch(ActionChatReducer.pushMessage(chatStore))
        setEditMode(false)

    }
    else{
        // console.log(chatStore?.users?.filter(e=>e.id===1)[0].messageWith.filter(e=>e.id==2)[0].message)
chatStore?.users?.filter(e=>e.id===1)[0].messageWith.filter(e=>e.id===2)[0].message.push({
    messageToFrom: "to",
    text: messageValue,
    time:new Date().getMinutes()+" "+new Date().getSeconds()
})
pushMessageThunk(chatStore)
    }
  
    setMessageValue("")
}
console.log(chatStore)


    return(
        <div className={s.wrapper}  >
<div className={s.head} >

<input type="text" className={s.findInput} />
</div>
<div className={s.mainSection} >

<ul >

{chatStore?.users?.filter( el=>el.id===1 )[0].messageWith .filter(el=>el.id===2)[0].message.map(
    (el,index)=><li className={el.messageToFrom==="to"?s.from:s.to  } key={shortid.generate()} >
     <div className={s.message} >
     { el.messageToFrom==="to"?<> <div className={s.wrapperTimeText} > <p >{el.text } </p> <p  className={s.timeOnMessageTo}>{el.time }</p>
       </div> <div className={s.btnWrapperRight} > <button className={s.btnEdit} onClick={()=>handleEditMessage(el,index  )} >edit</button><button onClick={()=>handleDeleteMessage(el,index)} className={s.btnDelete}>delete</button></div></>:
     <><div className={s.wrapperTimeText} >  <p className={s.timeOnMessageFrom} >{el.time } </p> <p>{el.text }</p> </div> <div className={s.userPhotoName} > <img src={el.url} alt="" /> </div> 
     <div className={s.btnWrapperLeft} > <button  onClick={()=>handleEditMessage(el,index)} className={s.btnEdit}>edit</button><button onClick={()=>handleDeleteMessage(el,index)} className={s.btnDelete}>delete</button></div></> }
  
     
      </div> </li>
    

    )}

</ul>




</div>
<div className={s.textAreaWithSendButton} >
<textarea type="text"  onChange={(e)=>{ setMessageValue(e.target.value)}} value={messageValue} className={s.textArea} />
<button className={s.btnSend} onClick={()=>handleSendMessage()} >send</button>
</div>
</div>
    )
}

export default Chat
